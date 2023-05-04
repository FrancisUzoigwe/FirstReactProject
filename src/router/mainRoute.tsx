import React from "react";
import {createBrowserRouter } from "react-router-dom"
import Layout from "../Components/Block/Layout";
import HomeScreen from "../Pages/HomeScreen";
import AboutScreen from "../Pages/AboutScreen";
import ContactScreen from "../Pages/ContactScreen";
import ProductScreen from "../Pages/Products";


export const mainRoute = createBrowserRouter([

    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>,
            },
            {
                path: "about",
                element: <AboutScreen/>,
            },
            {
                path: "contact",
                element: <ContactScreen/>,
            },
            {
                path: "product",
                element: <ProductScreen/>,
            },
        ]
        
    }
])