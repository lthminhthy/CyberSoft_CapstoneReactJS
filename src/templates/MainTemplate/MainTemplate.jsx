

import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const MainTemplate = () => {
     
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    })

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
    )
}

export default MainTemplate