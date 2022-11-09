const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home/Home");
const { default: Login } = require("../pages/Login/Login");
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
                path: '/login',
                element: <Login />
            },
            {
                path: '/services',
                element: <Services />
            }
        ]
    },

])