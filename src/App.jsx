import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

const route = [
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "*",
    element: <h2>404 PAGE NOT FOUND</h2>,
  },
];
const router = createBrowserRouter(route);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
