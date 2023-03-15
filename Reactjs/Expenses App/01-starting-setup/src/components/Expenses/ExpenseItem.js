import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import "./ExpenseItem.css"
const ExpenseItem = (props) => {
    // console.log(props)
    // const [title, setTitle] = useState(props.titleex)


    // const clickHandler = () => {
    //     setTitle("Updated Title")
    // }



    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate dateex={props.dateex}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.titleex}</h2>
                    <div className="expense-item__price">${props.amountex}</div>
                </div>

            </Card>
        </li >
    )
}
export default ExpenseItem;