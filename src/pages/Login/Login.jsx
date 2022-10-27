import React from 'react'
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';


const Login = () => {
  const dispatch = useDispatch()
  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log("userLogin: ", userLogin);

  const formik = useFormik({

    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: value => {
      const action = dangNhapAction(value);
      dispatch(action)
      console.log("value: ", value);
      // alert(JSON.stringify(value, null,2));
    },
  });


  return (
    <form className="lg:w-1/2 xl:max-w-screen-sm" onSubmit={formik.handleSubmit} >
      <div className="py-12 bg-yellow-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
          <img className='w-2/4 sm:w-4/5 md:w-full ' src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="logo" />
          </div>
          <div className="text-2xl text-yellow-500 tracking-wide ml-2 font-semibold">CYBER BOOKING</div>
        </div>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2 className="text-center text-4xl text-yellow-600 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Log in</h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">User Account</div>
              <input name='taiKhoan' onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500"  placeholder="Enter your account" />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
                <div>
                  <a className="text-xs font-display font-semibold text-yellow-600 hover:text-yellow-800
                                  cursor-pointer">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <input type='password' name='matKhau' onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" placeholder="Enter your password" />
            </div>
            <div className="mt-10">
              <button className="bg-yellow-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-600
                          shadow-lg">
                Log In
              </button>
            </div>
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Don't have an account ? <NavLink to='/register' className="cursor-pointer text-yellow-600 hover:text-yellow-800">Sign up</NavLink>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login