import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import ProductsPage from "./assets/pages/ProductsPage";
import Courses from "./assets/pages/Courses";
import NotFound from "./assets/pages/NotFound";
import Cart from "./assets/components/Cart/CartPage";
import Footer from "./assets/components/Footer";

import "./App.scss";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Home />}></Route>
          <Route path="/homepage" element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
