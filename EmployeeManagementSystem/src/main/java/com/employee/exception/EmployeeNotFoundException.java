package com.employee.exception;

public class EmployeeNotFoundException extends  Exception{
    /**
	 * 
	 */
	private static final long serialVersionUID = -892404103818854621L;

	public EmployeeNotFoundException(String message){
        super(message);
    }
}