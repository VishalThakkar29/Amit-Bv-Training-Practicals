import React from "react";
import "./ExpenseDate.css"
const ExpenseDate = (props) => {

    let month1 = props.dateex.toLocaleString('en-US', { month: 'long' });
    let day1 = props.dateex.toLocaleString('en-US', { day: '2-digit' });
    let year1 = props.dateex.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month1}</div>
            <div className="expense-date__year">{year1}</div>
            <div className="expense-date__day">{day1}</div>

        </div>
    )

}
export default ExpenseDate;