import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout"
import Root from "./routes/root";
import Quote from "./routes/quote";
import User from "./routes/user";
import Users from "./routes/users";
import Post from "./routes/post";
import Posts from "./routes/posts";
import ErrorPage from "./error-page";
import "./index.css";

//First method:
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement:<ErrorPage/>
//   },

//   {
//     path: "/messages",
//     element: <Root/>,
//   },
//   {
//     path: "/messages/:quote",
//     element: <Quote />,
//   },
//   {
//     path: "/users",
//     element: <Users />,
//   },
//   {
//     path: "users/:user",
//     element: <User />,
//   },

//   {
//     path: "/posts",
//     element: <Posts />,
//   },
//   {
//     path: "posts/:post",
//     element: <Post />,
//   },
// ]);

//Second method with Route:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
    <Route>
      <Route path="/" element={<App/>} errorElement={<ErrorPage/>}></Route>
      <Route path="messages" element={<Root />} />
      <Route path="messages/:quote" element={<Quote />} />
      
      <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<User />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<Post />} />
   </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
