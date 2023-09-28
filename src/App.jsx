import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import ProductsPage from "./assets/pages/ProductsPage";
import Courses from "./assets/pages/Courses";
import NotFound from "./assets/pages/NotFound";
import Cart from "./assets/components/Cart/CartPage";
import Description from "./assets/pages/Description";
import "./App.scss";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/homepage" element={<Home />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/products/:id" element={<Description />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
