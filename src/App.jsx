import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import LoadingPage from "./assets/pages/Home";
import ProductsPage from "./assets/pages/ProductsPage"
import NotFound from "./assets/pages/NotFound";

import "./App.scss";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes path ="/" element={<Navbar />}>
        <Route index element={<LoadingPage/>}></Route>
        <Route path="/loadingpage" element={<LoadingPage/>}></Route>
        <Route path="/productspage" element={<ProductsPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

