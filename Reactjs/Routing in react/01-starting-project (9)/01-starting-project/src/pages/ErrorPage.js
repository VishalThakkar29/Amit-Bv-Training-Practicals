import React from 'react'
import NavigationBar from '../components/NavigationBar'
import classes from "./RootLayout.module.css"
const ErrorPage = () => {
    return (
        <main>

            <div className={classes.content}>

                <NavigationBar />
                <h2>Error Page</h2>
                <p>oops! Something went wrong</p>
            </div>

        </main>
    )
}

export default ErrorPage
