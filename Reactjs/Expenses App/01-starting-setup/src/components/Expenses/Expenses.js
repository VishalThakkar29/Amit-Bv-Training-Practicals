import React, { useState } from "react";
import ExpensesList from "./NewExpense/ExpensesList";
import ExpensesFilter from "./NewExpense/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card"
import "./Expenses.css"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(2020)

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)

    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div>

            <Card className="expenses">

                <ExpensesFilter
                    selected={filteredYear}
                    onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesList items={filteredExpenses} />

            </Card>
        </div>)

}
export default Expenses;