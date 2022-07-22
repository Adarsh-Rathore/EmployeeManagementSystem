package com.employee.service;

import static org.mockito.Mockito.verify;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.employee.model.Compliance;
import com.employee.model.Department;
import com.employee.repository.ComplianceRepository;


@ExtendWith(MockitoExtension.class)
public class ComplainceServiceImplTests {

	@Mock
	private ComplianceRepository complianceRepo;

	@InjectMocks
	private ComplianceService complianceService = new ComplianceServiceImpl();

	@BeforeEach
	void setMockOutput() {
		this.complianceService = new ComplianceServiceImpl(this.complianceRepo);
	}
    
	
	@Test
	void testCreateCompliance() {
		Department department = new Department();
		department.setDepartId(0);
		department.setDepartName("CSE");
		
		
		Compliance compliance = new Compliance();
		compliance.setComplianceid(0);
		compliance.setRlType("Attendance");
		compliance.setDetails("Absent/Present");
		compliance.setStatus("Absent");
		complianceService.createRL(compliance);
		verify(complianceRepo).save(compliance);
		
	}
	

}
