import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import React from 'react';
import Parent from './components/Parent';
import Gallery from './components/Gallery';
import Layout from './components/Layout';
import About from './components/About/About';
import NotFound from './components/NotFound';



function App() {
  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "gallery", element: <Gallery /> },
        { path: "parent", element: <Parent /> },
        {
          path: "*",
          element: < NotFound />,
        },



      ]
    }


  ]);

  return (
    <>
      <RouterProvider router={router} />



    </>
  );
}

export default App;
