import React from 'react';
import classes from "./EmployeeDetails2.module.css"

const EmployeeDetails = ({ employee }) => {
    const handleUserNameClick = () => {
        alert(`Department: ${employee.department}`);

    };
    console.log(employee)

    if (employee === undefined) {
        return
    }
    else {
        return (

            <div >
                <h2 className={classes.header}>Employee Details</h2>
                <div className={classes.name}>
                    <label >Name: </label>
                    <span >{employee.name}</span>
                </div>
                <div className={classes.age} >
                    <label>Age: </label>
                    <span>{employee.age}</span>
                </div>
                <div className={classes.username}>
                    <label>Username: </label>
                    <span onClick={handleUserNameClick} >{employee.username}</span>
                </div>

            </div>
        )

    }

};
export default EmployeeDetails;