import React from 'react';
import Sidebar from "../components/Sidebar";
import CleanDir from "../components/CleanDirect";
import Clean from "../components/Clean";
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
              <CleanDir/>
            </div>
            <div className='flex ml-20 z-0'>
              <Clean/>
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