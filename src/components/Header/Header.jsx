import React, { Component, Fragment } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

// select Ant design
import { Select } from 'antd';

// i18next
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _ from 'lodash';



// select Ant design
const { Option } = Select;




const Header = () => {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const { t, i18n } = useTranslation();
    const handleChange = (value) => {
        i18n.changeLanguage(value)

    }

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button className="self-center px-8 py-3 rounded bg-yellow-400 text-gray-900 hover:text-white" onClick={() => {
                    navigate('/login')
                }}>{t('Sign in')}</button>
                <button className="hover:text-yellow-500 self-center px-8 py-3 font-semibold rounded " onClick={() => {
                    navigate('/register')
                }}>{t('Register')}</button>
            </Fragment>
        }
        return <button onClick={() => {
            navigate("/profile")
        }}>
            <div className='flex justify-center items-center mr-4'>
                <div className="overflow-hidden relative w-8 h-8 bg-black rounded-full dark:bg-gray-600">
                    <svg className="absolute -left-1 w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    

                </div>
                <span className="ml-3 font-medium text-white dark:text-gray-300">{userLogin.taiKhoan}</span>
            </div>
        </button>


    }
    let navigate = useNavigate();
    return (
        <header className="mx-auto p-4 bg-darkHeader text-white bg-opacity-60 fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">

                <NavLink rel="noopener noreferrer" to="/home" className="flex items-center p-2">
                    <img className='w-2/4 sm:w-4/5 md:w-full ' src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="logo" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <NavActive className="flex">
                        {/* <NavLink rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1  border-transparent text-white" >Home</NavLink> */}
                        <NavLink rel="noopener noreferrer" to="/home" className={({ isActive }) =>
                            isActive ? 'flex items-center px-4 -mb-1  border-transparent text-white border-b-2 border-gray-300 hover:text-yellow-500' : 'flex items-center px-4 -mb-1  border-transparent text-white hover:text-yellow-500'
                        }>{t('Home')}</NavLink>
                    </NavActive>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/contact" className={({ isActive }) =>
                            isActive ? 'flex items-center px-4 -mb-1  border-transparent text-white border-b-2 border-gray-300 hover:text-yellow-500' : 'flex items-center px-4 -mb-1  border-transparent text-white hover:text-yellow-500'
                        } >{t('Contact')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/news" className={({ isActive }) =>
                            isActive ? 'flex items-center px-4 -mb-1  border-transparent text-white border-b-2 border-gray-300 hover:text-yellow-500' : 'flex items-center px-4 -mb-1  border-transparent text-white hover:text-yellow-500'
                        } >{t('News')}</NavLink>
                    </li>

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {renderLogin()}




                    {/* <button className="self-center px-8 py-3 rounded bg-yellow-400 text-gray-900 hover:text-white" onClick={() => {
                        navigate('/login')
                    }}>{t('Sign in')}</button>
                    <button className="hover:text-yellow-500 self-center px-8 py-3 font-semibold rounded " onClick={() => {
                        navigate('/register')
                    }}>{t('Register')}</button> */}
                    <Select
                        defaultValue="EN"
                        style={{
                            width: 80,
                            color: 'yellow',

                        }}
                        bordered={false}
                        onChange={handleChange}
                    >
                        <Option value="EN">EN</Option>
                        <Option value="VI">VI</Option>

                    </Select>
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

export default Header



const NavActive = styled.div`
    &.active{
        border: 1px solid red;

    }
`
