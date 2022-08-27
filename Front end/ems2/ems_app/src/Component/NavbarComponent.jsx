import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NavbarComponent extends Component {
    render() {
        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand">Employee Management System</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/Department" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manage Department
                                </Link>
                                
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to = "/Employee" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manager Employee
                                </Link>
                               
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/Compliance" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manage Compliance 
                                </Link>
                                
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}