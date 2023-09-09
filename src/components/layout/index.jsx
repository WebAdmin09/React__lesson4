import React, { Component, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Navbar from '../navbar/Navbar'

export class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <main className="container">
                    <Outlet />
                </main>
                <Footer />
            </Fragment>
        )
    }
}

export default Layout
