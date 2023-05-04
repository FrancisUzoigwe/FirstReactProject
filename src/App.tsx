import React from 'react';
// import Header from './Components/Block/Header';
// import {Outlet } from "react-router-dom"
// import Footer from './Components/Block/Footer';
import {RouterProvider} from "react-router-dom"
import { mainRoute } from './router/mainRoute';

function App() {
  return (
    <div>
      <RouterProvider router={mainRoute}/>
    </div>
  );
}

export default App;
