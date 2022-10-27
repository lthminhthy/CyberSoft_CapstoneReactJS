import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { USER_LOGIN } from '../../util/settings/config'


const CheckoutTemplate = () => {

    if(!localStorage.getItem(USER_LOGIN)){
        return <Navigate to='/login'></Navigate>
    }

  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}

export default CheckoutTemplate