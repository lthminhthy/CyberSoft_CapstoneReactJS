import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HomeCarousel from '../HomeCarousel/HomeCarousel'

// note tạm
// import LogoNinja from './../../assets/pictures/LogoNinja.png'
{/* <img src={LogoNinja} alt="." className=" w-20 " /> */ }



export default class Header extends Component {
    render() {
        return (
            <header className="mx-auto p-4 bg-darkHeader text-white bg-opacity-60 fixed w-full z-10">
                <div className="container flex justify-between h-16 mx-auto">

                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='w-2/4 sm:w-4/5 md:w-full ' src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="logo" />
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <NavActive className="flex">
                            {/* <NavLink rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1  border-transparent text-white" >Home</NavLink> */}
                            <NavLink rel="noopener noreferrer" to="/home" className= {({ isActive }) =>
                                isActive ? 'flex items-center px-4 -mb-1  border-transparent text-white border-b-2 border-gray-300 hover:text-yellow-500' : 'flex items-center px-4 -mb-1  border-transparent text-white hover:text-yellow-500'
                            } >Home</NavLink>
                        </NavActive>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/contact" className={({ isActive }) =>
                                isActive ? 'flex items-center px-4 -mb-1  border-transparent text-white border-b-2 border-gray-300 hover:text-yellow-500' : 'flex items-center px-4 -mb-1  border-transparent text-white hover:text-yellow-500'
                            } >Contact</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/news" className={({ isActive }) =>
                                isActive ? 'flex items-center px-4 -mb-1  border-transparent text-white border-b-2 border-gray-300 hover:text-yellow-500' : 'flex items-center px-4 -mb-1  border-transparent text-white hover:text-yellow-500'
                            } >News</NavLink>
                        </li>

                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <button className="self-center px-8 py-3 rounded hover:text-yellow-500">Sign in</button>
                        <button className="self-center px-8 py-3 font-semibold rounded bg-yellow-400 text-gray-900 hover:text-white">Sign up</button>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

            </header>

        )
    }
}


const NavActive = styled.div`
    &.active{
        border: 1px solid red;

    }
`
