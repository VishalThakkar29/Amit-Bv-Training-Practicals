import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from "./AddUser.module.css"
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {

    const [enteredUserName, setUserName] = useState('');

    const [enteredUserAge, setUserAge] = useState('');

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError(
                {
                    title: 'invalid Input',
                    message: "plz enter valid input"
                }
            )
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid Input Age ",
                message: "plz enter Valid input age(age>0)"
            })
            return;
        }
        // console.log(enteredUserName, enteredUserAge);
        props.onAddUser(enteredUserName, enteredUserAge)
        setUserAge('');
        setUserName('');



    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value)
        // console.log(enteredUserName, setUserName)

    }
    const ageChangeHandler = (event) => {
        setUserAge(event.target.value)
        // console.log(enteredUserAge, setUserAge)

    }
    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>UserName </label>
                    <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                    <label htmlFor='age' >UserName(Years) </label>
                    <input id="age" type="number" value={enteredUserAge} onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button>

                </form>
            </Card>

        </>
    )
}

export default AddUser;
