import { Navigate, useRoutes } from "react-router-dom"
import Profile from "../components/Profile/Profile"
import AddNewFilm from "../pages/Admin/AdminFilms/AddNewFilm"
import AdFilms from "../pages/Admin/AdminFilms/AdFilms"
import EditFilm from "../pages/Admin/AdminFilms/EditFilm"
import Dashboard from "../pages/Admin/Dashboard/Dashboard"
import ShowTime from "../pages/Admin/ShowTime/ShowTime"

import Checkout from "../pages/Checkout/Checkout"
import Contact from "../pages/Contact/Contact"

import Detail from "../pages/Detail/Detail"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import News from "../pages/News/News"
import Register from "../pages/Register/Register"
import AdminTemplate from "../templates/AdminTemplate/AdminTemplate"
import CheckoutTemplate from "../templates/CheckoutTemplate/CheckoutTemplate"
import  MainTemplate from "../templates/MainTemplate/MainTemplate"
import UserTemplate from "../templates/UserTemplate/UserTemplate"




export const Router = () => {
    const routing = useRoutes([
        {
            path: '/',
            element: <MainTemplate></MainTemplate>,
            children:[
                {
                    path: '/',
                    element: <Navigate to='home'/>
                },
                {
                    path:'home',
                    element: <Home></Home>
                },
                {
                    path:'contact',
                    element: <Contact></Contact>
                },
                {
                    path:'news',
                    element: <News></News>
                },
                {
                    path:'detail/:id',
                    element: <Detail></Detail>
                },
                {
                    path:'profile',
                    element: <Profile></Profile>
                }
            ]
        },
        {
            path:'/',
            element: <CheckoutTemplate></CheckoutTemplate>,
            children: [
                {
                    path: 'checkout/:id',
                    element: <Checkout></Checkout>
                }
            ]
        },
        {
            path:'/',
            element: <UserTemplate></UserTemplate>,
            children: [
                {
                    path:'login',
                    element: <Login></Login>
                },
                {
                    path:'register',
                    element: <Register></Register>
                }

            ]
            
        },
        {
            path:'/admin/',
            element: <AdminTemplate></AdminTemplate>,
            children:[
                {
                    path:'user',
                    element: <Dashboard></Dashboard>
                },
                {
                    path:'film',
                    element: <AdFilms></AdFilms>,

                },
                {
                    path:'film/add',
                    element: <AddNewFilm></AddNewFilm>,

                },
                {
                    path:'film/edit/:id',
                    element: <EditFilm></EditFilm>,

                },
                {
                    path:'film/showtime/:id/:tenphim',
                    element: <ShowTime></ShowTime>
                }
            ]
          
        },


    ])
    return routing
}
export default Router