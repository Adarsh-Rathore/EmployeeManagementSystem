package com.employee.controller;

import com.employee.exception.DepartmentNotFoundException;
import com.employee.model.Department;
import com.employee.service.DepartmentService;

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
@ResponseBody  @CrossOrigin(origins = "http://localhost:3000")// tells a controller that the object returned is automatically serialized into JSON and passed back into the HttpResponse object.
@RequestMapping("department") // the annotation is used to map web requests to Spring Controller methods.
public class DepartmentController {

    @Autowired // Enabling annotation injection, we can use autowiring on properties, setters, and constructors.
    private DepartmentService departmentService;

    //Here, we are fetching all Departments
    @GetMapping("/getall") // annotation that acts as a shortcut for @RequestMapping.
    @ApiOperation("Fetch All Department Records") // annotation to describe the endpoint and its response type
    public List<Department> getDepartments() {
        log.info("INSIDE getDepartments");
        return departmentService.getAllDepartments();
    }

    @ApiOperation("Get A Department By ID") // annotation to describe the endpoint and its response type
    @GetMapping("/getbyid/{id}")  // annotation that acts as a shortcut for @RequestMapping.
    public Department fetchById(@PathVariable int id) throws DepartmentNotFoundException {
        try{
            if(departmentService.fetchById(id)==null){
                throw new DepartmentNotFoundException("Department not found");
            }
            return departmentService.fetchById(id);
        }
        catch (DepartmentNotFoundException e){
            System.out.println(e.getCause());
            return departmentService.fetchById(id);
        }
    }

    @ApiOperation("Save a New Department Record.") // annotation to describe the endpoint and its response type
    @PostMapping("/create") // Annotation for mapping HTTP POST requests onto specific handler methods.
    public ResponseEntity<Department> createDepartment(@Valid @RequestBody Department department) {
        log.info("Inside Employee %s", department);
        Department dept = departmentService.addDepartment(department);
        return new ResponseEntity<>(dept, HttpStatus.CREATED);
    }

    // annotations, working (mapping, layers, MVC, JPA)
    @ApiOperation("Delete A department") // annotation to describe the endpoint and its response type
    @DeleteMapping("/delete/{departId}") // annotation maps HTTP DELETE requests onto specific handler methods
    public ResponseEntity<Void> delete(@PathVariable("departId") int departId){
        log.info("Deleting a department with id " + departId);
        departmentService.deleteDepartment(departId);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
