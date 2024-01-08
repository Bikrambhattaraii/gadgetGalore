import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./pages/defaultLayout";
import Home from "./pages/Home";
import Cart from "./components/cart/cart";

const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/cart',
                element: <Cart />,
            },
        ]
    },
])

export default router;