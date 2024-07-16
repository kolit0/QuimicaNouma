import React from 'react';
import Sidebar from "../components/Sidebar";
import CosDir from "../components/CosmeticDirect";
import Cosmetics from "../components/Cosmetics";
import Contacto from "../components/ContactoEnviar";
import Footer from "../components/footer";
import Ws from "../components/wsBtn";

export default function ProductsInd () {
    return(
      <>
        <div className='font-Pthin'>
            <div className='z-20 sticky top-0'>
              <Sidebar/>
              <Ws/>
            </div>
            <div className='flex ml-20 z-0'>
              <CosDir/>
            </div>
            <div className='flex ml-20 z-0'>
              <Cosmetics/>
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