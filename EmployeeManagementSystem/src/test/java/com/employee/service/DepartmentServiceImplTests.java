package com.employee.service;

import static org.mockito.Mockito.verify;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.employee.model.Department;
import com.employee.repository.DepartmentRepository;


@ExtendWith(MockitoExtension.class)
public class DepartmentServiceImplTests {

	@Mock
	private DepartmentRepository departmentRepo;

	@InjectMocks
	private DepartmentService departmentService = new DepartmentServiceImpl();

	@BeforeEach
	void setMockOutput() {
		this.departmentService = new DepartmentServiceImpl(this.departmentRepo);
	}

	@Test
	void testRegisterDepartment() {
		Department department = new Department();
		department.setDepartId(0);
		department.setDepartName("CSE");
	
		departmentService.addDepartment(department);
		verify(departmentRepo).save(department);
	}
	

}
