import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "~/layouts/dashboard";
import LoginLayout from "~/layouts/login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        // children: [
        //     {
        //         index: true,
        //         element: "İnanılmaz haahah"
        //     },
        // ]
    },
    {
        path: '/app',
        element: <DashboardLayout />,
        // children: [
        //     {
        //         index: true,
        //         element: "İnanılmaz haahah"
        //     },
        // ]
    }
])

export default routes
