import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import ProductsPage from "./assets/pages/ProductsPage";
import Courses from "./assets/pages/Courses";
import NotFound from "./assets/pages/NotFound";
import Cart from "./assets/components/Cart/CartPage";
import Description from "./assets/pages/Description";
import Search from "./assets/pages/Search";
import User from "./assets/pages/User";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import ShoppingContext from "./assets/context/ShoppingContext";
import "./App.scss";

export default function App() {
  return (
    <>
      <ShoppingContext>
        <Router basename="/Nailz">
          <Navbar />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/homepage" element={<Home />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/products/:id" element={<Description />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ShoppingContext>
    </>
  );
}
