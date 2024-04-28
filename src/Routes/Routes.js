import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../Components/Home"

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])