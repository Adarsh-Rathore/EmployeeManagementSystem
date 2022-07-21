package com.employee.service;

import org.springframework.stereotype.Service;

import com.employee.model.*;

import java.util.List;

@Service
public interface ComplianceService {
    public Compliance createRL(Compliance compliance);

    public List<Compliance> getAllRL();

    public Compliance getAllRL(int id);


}
