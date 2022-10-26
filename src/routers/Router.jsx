import { Navigate, useRoutes } from "react-router-dom"
import Contact from "../pages/Contact/Contact"
import Detail from "../pages/Detail/Detail"
import Home from "../pages/Home/Home"
import News from "../pages/News/News"
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
        // {
        //   
        // }


    ])
    return routing
}
export default Router