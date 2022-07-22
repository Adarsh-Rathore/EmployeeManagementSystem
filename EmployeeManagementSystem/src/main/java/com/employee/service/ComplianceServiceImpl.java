package com.employee.service;

import com.employee.model.*;
import com.employee.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
class ComplianceServiceImpl implements ComplianceService{

    @Autowired
    private ComplianceRepository complianceRepository;
    
    

    public ComplianceServiceImpl(ComplianceRepository complianceRepository) {
		super();
		this.complianceRepository = complianceRepository;
	}

	public ComplianceServiceImpl() {
		super();
	}

	@Override
    public Compliance createRL(Compliance compliance) {
        complianceRepository.save(compliance);
        return compliance;
    }

    @Override
    public List<Compliance> getAllRL() {
        return complianceRepository.findAll();
    }

    @Override
    public Compliance getAllRL(int id) {
        Compliance compliance = null;
        Optional<Compliance> optionalCompliance = complianceRepository.findById(id);
        if (optionalCompliance.isPresent()) {
            compliance = optionalCompliance.get();
        }
        return compliance;
    }

    
}
