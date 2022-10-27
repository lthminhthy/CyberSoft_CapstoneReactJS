import { Navigate, useRoutes } from "react-router-dom"
import Checkout from "../pages/Checkout/Checkout"
import Contact from "../pages/Contact/Contact"
import Detail from "../pages/Detail/Detail"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import News from "../pages/News/News"
import CheckoutTemplate from "../templates/CheckoutTemplate/CheckoutTemplate"
import  MainTemplate from "../templates/MainTemplate/MainTemplate"




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
            path:'/login',
            element: <Login></Login>
            
        }
        // {
        //   
        // }


    ])
    return routing
}
export default Router