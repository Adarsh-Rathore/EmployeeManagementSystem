package com.employee.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "empTable")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Size(min = 2, max = 20)
    @NotNull(message = "Pls Enter First Name!")
    private String firstName;
    @Size(min = 2, max = 20)
    @NotNull(message = "Pls Enter Last Name!")
    private String lastName;

    @NotNull(message = "Pls Enter Email")
    @Email
    private String email;
   



    @ManyToOne( cascade = CascadeType.MERGE)
    @JoinColumn(name = "departId")
    private Department department;

}
