import { Navigate, useRoutes } from "react-router-dom"
import Home from "../pages/Home/Home"
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
                }
            ]
        },
        // {
        //     path:'/admin'
        // }


    ])
    return routing
}
export default Router