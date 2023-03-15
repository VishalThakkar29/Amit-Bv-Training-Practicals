import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { Outlet } from 'react-router-dom'
import classes from "./RootLayout.module.css"

const RootLayout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <main className={classes.content}>
                <Outlet />
            </main>



        </>
    )
}

export default RootLayout

