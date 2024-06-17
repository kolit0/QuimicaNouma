import React from 'react';
import imagenQuimica from "../Imagenes/quimicabody.png";
import { motion } from "framer-motion";

const inicio = () => {
  return (
    
    <div className='bg-cover bg-blend-multiply bg-gray-500 h-[53.7rem] w-full px-10' style={{backgroundImage: `url(${imagenQuimica})`}}>
      <div className="flex flex-col w-full pt-44 md:pl-60">
        <motion.div 
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="grid flex-grow h-auto">
          <p className=' font-semibold md:text-6xl text-white text-4xl'>DEDICADOS A LA MATERIA PRIMA</p>
        </motion.div> 
        <motion.div 
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        className=' md:w-80 bg-blue-500 h-1'></motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="grid flex-grow h-auto">
          <p className='text-2xl md:pr-20 text-justify'>Dedicados a la Importación, almacenamiento y distribución de materias prima para diversos sectores (Alimentos, pinturas, cosméticos, limpieza e industrial) a nivel nacional.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default inicio