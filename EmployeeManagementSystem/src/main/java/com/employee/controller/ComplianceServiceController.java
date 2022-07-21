package com.employee.controller;

import com.employee.model.*;
import com.employee.service.ComplianceService;

import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

//RESTful APIs
@Slf4j // It offers a generic API making the logging independent of the actual implementation.
@Controller // allows us to auto-detect implementation classes through the classpath scanning.
@ResponseBody // tells a controller that the object returned is automatically serialized into JSON and passed back into the HttpResponse object.
@RequestMapping("compliance")  // the annotation is used to map web requests to Spring Controller methods.
public class ComplianceServiceController {

    @Autowired // Enabling annotation injection, we can use autowiring on properties, setters, and constructors.
    private ComplianceService complianceService;

    @GetMapping("/getall") // annotation that acts as a shortcut for @RequestMapping.
    @ApiOperation("Fetch All Compliance Records")  // annotation to describe the endpoint and its response type
    public List<Compliance> getDepartments() {
        log.info("INSIDE getDepartments");
        return complianceService.getAllRL();
    }

    @ApiOperation("Get A Employee By ID")
    @GetMapping("/getbyid/{id}")
    public Compliance getById(@PathVariable int id) {
        return complianceService.getAllRL(id);
    }


    @ApiOperation("Save a New Compliance Record.")
    @PostMapping("/create/compliance") // Annotation for mapping HTTP POST requests onto specific handler methods.
    public ResponseEntity<Compliance> createCompliance(@Valid @RequestBody Compliance compliance) {

        Compliance comp = complianceService.createRL(compliance);
        return new ResponseEntity<>(comp, HttpStatus.CREATED);
    }

}
