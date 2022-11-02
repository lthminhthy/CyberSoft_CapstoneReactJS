import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router'
import { USER_LOGIN } from '../../util/settings/config'


const CheckoutTemplate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

})
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