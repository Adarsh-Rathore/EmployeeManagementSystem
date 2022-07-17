package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.model.Compliance;

@Repository
public interface ComplianceRepository extends JpaRepository<Compliance,Integer> {
}

