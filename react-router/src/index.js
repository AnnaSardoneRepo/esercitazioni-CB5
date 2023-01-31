import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Quote from "./routes/quote";
import User from './routes/user';
import Users from './routes/users'
import Post from './routes/post';
import Posts from './routes/posts'
import ErrorPage from "./error-page";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>
  },

  {
    path: "/messages",
    element: <Root/>,
  },
  {
    path: "/messages/:quote",
    element: <Quote />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "users/:user",
    element: <User />,
  },
  
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "posts/:post",
    element: <Post />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);

