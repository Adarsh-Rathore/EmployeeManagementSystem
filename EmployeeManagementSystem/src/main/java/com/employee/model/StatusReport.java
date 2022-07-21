package com.employee.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import java.time.LocalDate;


@Data
@NoArgsConstructor
@Entity
@Table(name = "statTable")
public class StatusReport {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int statusId;

    @Size(min = 2, max = 20)
    @NotNull(message = "Enter comments")
    private String comments;

    @Size(min = 2, max = 20)
    @NotNull(message = "Enter Details")
    private String details;

    @NotNull(message = "Enter Date of creation")
    private LocalDate createDate;

    @OneToOne(targetEntity = Compliance.class,cascade = CascadeType.ALL)
    @JoinColumn(name="complianceid")
    public Compliance compliance;

    @ManyToOne(targetEntity = Department.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "deptTable", referencedColumnName = "departId")
    private Department department;


}


