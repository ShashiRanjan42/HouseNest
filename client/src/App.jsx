import React from 'react'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

import HomePage from "./routes/homepage/home";
import ListPage from "./routes/listPage/listPage";
import {Layout, RequireAuth} from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdate from './routes/profileUpdate/profileUpdate';
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, singlePageLoader, profilePageLoader } from "./lib/loaders";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>,
          loader: listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader: singlePageLoader,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
      ],
    },

    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path:"/profile",
          element:<ProfilePage/>,
          loader: profilePageLoader,
        },
        {
          path:"/Profile/update",
          element: <ProfileUpdate />
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ]
    }
  ]);


  return (
    <RouterProvider router={router}/>
  )
}

export default App