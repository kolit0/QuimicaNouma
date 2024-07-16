import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Productos";
import ProductsInd from "./pages/ProInd";
import ProLim from "./pages/ProLim";
import ProCos from "./pages/ProCos";
import ProAli from "./pages/ProAli";

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Products" element={<Products />}/>
          <Route path="/Products/Industry" element={<ProductsInd />}/>
          <Route path="/Products/Cleaning" element={<ProLim />}/>
          <Route path="/Products/Cosmetics" element={<ProCos />}/>
          <Route path="/Products/Food" element={<ProAli />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}