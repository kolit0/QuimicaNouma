import React from 'react';
import Sidebar from "../components/Sidebar";
import ProductoDirectorio from "../components/ProductosDirectorio";
import Contacto from "../components/ContactoEnviar";
import Footer from "../components/footer";
import Productos from "../components/ProductosContenido";
import Ws from "../components/wsBtn";
import { useEffect } from 'react';

export default function Products() {
  useEffect(() => {
    document.title = "Productos";
  }, []);
    return(
      <>
        <div className='font-Pthin'>
            <div className='z-20 sticky top-0'>
              <Sidebar/>
              <Ws/>
            </div>
            <div className='flex ml-20 z-0'>
              <ProductoDirectorio></ProductoDirectorio>
            </div>
            <div className='flex ml-20 z-0'>
              <Productos></Productos>
            </div>
            <div className='flex ml-20 z-0'>
              <Contacto></Contacto>
            </div>
            <div className='flex pl-20 z-0'>
              <Footer></Footer>
            </div>
      </div>
      </>
    )
  }