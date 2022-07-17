package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.model.StatusReport;

@Repository
public interface StatusReportRepository extends JpaRepository<StatusReport,Integer> {
}
