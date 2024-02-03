
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import {RouterProvider, createBrowserRouter} from "react-router-dom"




const App = () => {

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/products/:cat",
    element: <ProductList/>
  },
  {
    path: "/singleproduct/:id",
    element: <SingleProduct/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
]);


  return (

    <>
     
        <RouterProvider router={ router} />
   
    </>
  )


  
  
};

export default App;