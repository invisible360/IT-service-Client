import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Update from "../pages/Update/Update";
import RoutePrivate from "./RoutePrivate";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home/Home");
const { default: Services } = require("../pages/Services/Services");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch(`https://it-service-server-invisible360.vercel.app/allservices`)
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://it-service-server-invisible360.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addservice',
                element: <RoutePrivate><AddService></AddService></RoutePrivate>
            },
            {
                path: '/myreviews',
                element: <RoutePrivate><MyReviews></MyReviews></RoutePrivate>,
                loader: () => fetch(`https://it-service-server-invisible360.vercel.app/reviews`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'update/:id',
                element: <Update />,
                loader: ({ params }) => fetch(`https://it-service-server-invisible360.vercel.app/update/${params.id}`),
            }
        ]
    },

])