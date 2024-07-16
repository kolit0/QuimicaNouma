import React from 'react';
import Sidebar from "../components/Sidebar";
import IndustryDirect from "../components/IndustryDirect";
import Contacto from "../components/ContactoEnviar";
import Footer from "../components/footer";
import Industry from "../components/Industrial";
import Ws from "../components/wsBtn";
import { useEffect } from 'react';

export default function ProductsInd () {
  useEffect(() => {
    document.title = 'Sector Industrial - Química Nouma';
  }, []);
    return(
      <>
        <div className='font-Pthin'>
            <div className='z-20 sticky top-0'>
              <Sidebar/>
              <Ws/>
            </div>
            <div className='flex ml-20 z-0'>
              <IndustryDirect/>
            </div>
            <div className='flex ml-20 z-0'>
              <Industry/>
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