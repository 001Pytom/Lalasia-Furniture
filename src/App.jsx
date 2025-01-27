import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
      { path: "/services", element: <Services /> },
      { path: "/articles", element: <Articles /> },
      { path: "/aboutus", element: <AboutUs /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
