// IMPORTS COMPONENTS
import Nav from "./components/Navbar/Nav";
import { Home } from "./components/Home/Home";
import { All } from "./components/All/All";
import { Mens } from "./components/mens/Mens";
import { Electronics } from "./components/Electronics/Electronics";
import {Jewelery } from "./components/Jewelery/Jewelery";
import { Woman } from "./components/Woman/Woman";
import ProductDetail from "./components/productDetail/ProductDetail";
import SideMenu from "./components/sideMenu/SideMenu";
// React Imports
import { BrowserRouter, useRoutes } from "react-router-dom";
import { ProviderContext } from "./helpers/Context/Context";
import MyOrders from "./components/MyOrders/MyOrders";
import { MyOrder } from "./components/MyOrder/MyOrder";





const Rotes = () => {
  let routas = useRoutes([
    {path: "/", element: <Home />},
    {path: "/All", element: <All />},
    {path: "/mens", element: <Mens />},
    {path: "/Electronics", element: <Electronics />},
    {path: "/Jewelery", element: <Jewelery />},
    {path: "/Woman", element: <Woman />},
    {path: "mis-ordenes", element: <MyOrders />},
    {path: "mi-orden", element: <MyOrder/>},
    {path: "mi-orden/last", element: <MyOrder/>},
    {path: "mi-orden/:id", element: <MyOrder/>}
  ])

  return routas
}


// APP Component
const App = () => {
  return (
    <ProviderContext>
      <BrowserRouter>
      <Nav />
      <ProductDetail />
      <SideMenu />
      <Rotes />
    </BrowserRouter>
    </ProviderContext>
  )
}



export { 
  App
}