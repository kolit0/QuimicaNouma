import React from 'react';
import Sidebar from "../components/Sidebar";
import CosDir from "../components/CosmeticDirect";
import Cosmetics from "../components/Cosmetics";
import Contacto from "../components/ContactoEnviar";
import Footer from "../components/footer";
import Ws from "../components/wsBtn";
import { useEffect } from 'react';

export default function ProductsInd () {
  useEffect(() => {
    document.title = 'Sector De Cosméticos - Química Nouma';
  }, []);
    return(
      <>
        <div className='font-Pthin'>
            <div className='z-20 sticky top-0'>
              <Sidebar/>
              <Ws/>
            </div>
            <div className='flex md:ml-20 z-0'>
              <CosDir/>
            </div>
            <div className='flex md:ml-20 z-0'>
              <Cosmetics/>
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