import React, { useState } from "react";
import EmployeeDetails from "./EmployeeDetails";
import classes from "./EmployeeComp.module.css"
const Employeees = () => {
    const [selectedEmployee, setSelectedEmployee] = useState();

    const handleEmployeeClick = (employee) => {

        setSelectedEmployee(employee);
    };


    const employees = [
        { name: 'Amit Chaudhary', age: 35, username: 'Amit', department: 'Sales' },
        { name: 'Vishal Thakkar', age: 28, username: 'Vishal', department: 'Marketing' },
        { name: 'Pawan Sai', age: 42, username: 'Pawan', department: 'Engineering' },
        { name: 'Srikant Gola', age: 23, username: 'Srikant', department: 'Human Resources' },
        { name: 'Bharat Sapram', age: 27, username: 'Bharat', department: 'System' },
    ];



    return (
        <>
            <div className={classes.con}>
                <h2 className={classes.header}>Employees component</h2>
                <ul className={classes.list}>
                    {employees.map((employee, index) => (
                        <li className={classes.listItem} key={index} onClick={() => handleEmployeeClick(employee)}>
                            {employee.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classes.con}> <EmployeeDetails
                employee={selectedEmployee}
            /></div>
        </>);
};

export default Employeees;
