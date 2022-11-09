import AddService from "../pages/AddService/AddService";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

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
                loader: () => fetch(`http://localhost:5000/allservices`)
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
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
                element: <AddService></AddService>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            }
        ]
    },

])