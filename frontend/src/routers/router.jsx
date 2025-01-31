import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/about',
                element:<h1>About page</h1>
            },
            {
                path:'/orders',
                element:<h1>Orders page</h1>
            }
        ]
    }
])
export default router;