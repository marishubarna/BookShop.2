// // import { StrictMode } from "react";
// // import { createRoot } from "react-dom/client";
// import "./index.css";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ShopCard from "../src/components/ShopCard";
// import Error from "../src/components/Error";
// import App from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement:<Error/>
//   },
//   {
//     path: "/shop",
//     element: <ShopCard/> ,
//   },
//   {
//     path:"*",
//     element:<Error/>
//   }

// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopCard from "../src/components/ShopCard";
import Error from "../src/components/Error";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/shop",
    element: <ShopCard />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;
