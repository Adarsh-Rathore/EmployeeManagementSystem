package com.employee.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import java.time.LocalDate;
import java.util.List;

@Data // generates all the boilerplate that is normally associated with simple POJOs
@NoArgsConstructor // will generate a constructor with no parameters
@Entity // annotation specifies that the class is an entity and is mapped to a database table
@Table(name = "compTable") // specifies the name of the database table to be used for mapping
public class Compliance {
    @Id // annotation specifies the primary key of an entity
    @GeneratedValue(strategy = GenerationType.AUTO) // annotation provides for the specification of generation strategies for the values of primary keys
    public int complianceid;

    @Size(min = 2, max = 20) // specifies the range of the variable
    @NotNull(message = "Enter Regulation/Legislation Type") // does not permit to pass a null value
    private String rlType;

    @Size(min = 2, max = 20)
    @NotNull(message = "Enter Details")
    private String details;

    @NotNull(message = "Enter Date of creation")
    private LocalDate createDate;

    @ManyToOne(targetEntity = Department.class, cascade = CascadeType.ALL) // annotations define many to one relations
    @JoinColumn(name = "deptTable", referencedColumnName = "departId") // marks a column for as a join column for an entity association or an element collection.
    private Department department;

    @NotNull(message = "Enter employee count")
    private int empCount;

    @NotNull(message = "Enter Status Count")
    private int stsCount;

    @NotNull(message = "Enter Status")
    private String status;
    //our current status or current position


}


