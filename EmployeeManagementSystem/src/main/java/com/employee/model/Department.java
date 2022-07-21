package com.employee.model;

import javax.persistence.*;

@Entity
@Table(name = "deptTable")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "departId", nullable = false)
    private int departId;
    private String departName;
	public int getDepartId() {
		return departId;
	}
	public void setDepartId(int departId) {
		this.departId = departId;
	}
	public String getDepartName() {
		return departName;
	}
	public void setDepartName(String departName) {
		this.departName = departName;
	}
	@Override
	public String toString() {
		return "Department [departId=" + departId + ", departName=" + departName + "]";
	}
    
    
}
