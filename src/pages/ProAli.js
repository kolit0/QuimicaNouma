import React from 'react';
import Sidebar from "../components/Sidebar";
import FoodDir from "../components/FoodDirect";
import Food from "../components/Food";
import Contacto from "../components/ContactoEnviar";
import Footer from "../components/footer";
import Ws from "../components/wsBtn";
import { useEffect } from 'react';

export default function ProductsInd () {
  useEffect(() => {
    document.title = 'Sector De Alimentos y Bebidas - Química Nouma';
  }, []);
    return(
      <>
        <div className='font-Pthin'>
            <div className='z-20 sticky top-0'>
              <Sidebar/>
              <Ws/>
            </div>
            <div className='flex md:ml-20 z-0'>
              <FoodDir/>
            </div>
            <div className='flex md:ml-20 z-0'>
              <Food/>
            </div>
            <div className='flex md:ml-20 z-0'>
              <Contacto></Contacto>
            </div>
            <div className='flex md:ml-20 z-0'>
              <Footer></Footer>
            </div>
      </div>
      </>
    )
  }