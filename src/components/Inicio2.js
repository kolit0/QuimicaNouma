import React from 'react';
import imagenTraslado from "../Imagenes/truck-loading.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  return (
    <section className='bg-center bg-cover bg-blend-multiply bg-gray-500 h-screen w-screen flex flex-col' style={{backgroundImage: `url(${imagenTraslado})`}} >
      <div className='w-full h-40 bg-white bg-opacity-40 backdrop-blur-md'>  
        <div className='h-screen shrink md:w-80 w-10 md:bg-white backdrop-blur-md'>
        </div>
      </div>
      <div className='flex-col md:grid md:grid-cols-3 h-screen md:ml-60 md:place-items-start place-items-center z-10 max-md:space-y-10 max-md:px-5 pr-40'>
        <div className='bg-[#0e1852] w-auto max-w-[30rem] md:h-40 h-20 md:-mt-14 -mt-3 content-center place-items-center' style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} ref={ref}>
          {children}
        <h2 className='md:text-5xl text-2xl text-center border-b-2 border-cyan-400 mx-4'>ACERCA DE NOSOTROS</h2>
        </div>
        <div className='self-center bg-[#0e1852] w-auto max-w-[30rem] md:h-40 h-20 place-items-center content-center md:-mt-20'style={{
          transform: isInView2 ? "none" : "translateX(-200px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} ref={ref2}>
          {children}
          <h3 className='md:text-5xl text-2xl text-center border-b-2 border-cyan-400 mx-4'>Comunicación clara y honesta</h3>
        </div>
        <div className='self-center col-start-3 bg-[#0e1852] w-auto max-w-[30rem] md:h-40 h-20 md:mt-96 content-center'style={{
          transform: isInView3 ? "none" : "translateY(200px)",
          opacity: isInView3 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} ref={ref3}>
          {children}
          <h3 className='md:text-5xl text-2xl text-center border-b-2 border-cyan-400 mx-4'>Respeto y orientación al cliente</h3>
        </div>
        <div className='col-start-2 bg-[#0e1852] w-auto max-w-[30rem] md:h-40 h-20 self-end content-center mb-5'style={{
          transform: isInView4 ? "none" : "translateY(200px)",
          opacity: isInView4 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} ref={ref4}>
          {children}
          <h3 className='md:text-5xl text-2xl text-center border-b-2 border-cyan-400 mx-4'>Competitividad e innovación</h3>
        </div>
        
      </div>
    </section>
    
  )
}

export default function Inicio2() {
  return (
    <>
      <Section></Section>

    </>
  );
}