import React from 'react';
import Acetico from "./Botones-Descarga/Acetico";
import AcidoCitrico from "./Botones-Descarga/AcidoCitrico";
import Fosforico from "./Botones-Descarga/Fosforico";
import Yuca from "./Botones-Descarga/Yuca";
import Papa from "./Botones-Descarga/Papa";
import BenzoatoSodio from "./Botones-Descarga/BenzoatoSodio";
import Cmc from "./Botones-Descarga/Cmc";
import Carragenato from "./Botones-Descarga/Carragenato";
import CitratoSodio from "./Botones-Descarga/CitratoSodio";
import CloruroCal from "./Botones-Descarga/CloruroCal";
import Dextrosa from "./Botones-Descarga/Dextrosa";
import Eritorbato from "./Botones-Descarga/Eritorbato";
import Glutamato from "./Botones-Descarga/Glutamato";
import GomaGuar from "./Botones-Descarga/GomGuar";
import GomaXan from "./Botones-Descarga/GomaXan";
import Metabisulfato from "./Botones-Descarga/Metabisulfato";
import Propianato from "./Botones-Descarga/Propianato";
import ProteinaSoya from "./Botones-Descarga/ProteinaSoya";
import Sorbato from "./Botones-Descarga/Sorbato";
import Tripolifosfato from "./Botones-Descarga/Tripolifosfato";
import Propil from "./Botones-Descarga/Propil";
import imgTambor from "../Imagenes/Productos/Tambor.png";
import imgCarboya from "../Imagenes/Productos/Carboya.png";
import imgIbc from "../Imagenes/Productos/IBC.png";
import imgSaco from "../Imagenes/Productos/Saco.png";
import imgCaja from "../Imagenes/Productos/Caja.jpg";
import imgPaletSacos from "../Imagenes/Productos/PaletaSacos.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import india from "../Imagenes/Banderas/india.png";
import kazajistan from "../Imagenes/Banderas/Kazajistan.png";
import tailandia from "../Imagenes/Banderas/Tailandia.png";
import vietnam from "../Imagenes/Banderas/Vietnam.png";
import corea from "../Imagenes/Banderas/Corea.png";
import china from "../Imagenes/Banderas/china.jfif";
import usa from "../Imagenes/Banderas/Usa.png";
import vzla from "../Imagenes/Banderas/Venezuela.png";
import polonia from "../Imagenes/Banderas/Polonia.png";
import brasil from "../Imagenes/Banderas/Brasil.jpg";
import alemania from "../Imagenes/Banderas/Alemania.png";
import peligro0 from "../Imagenes/Peligros/Peligro0.png";
import peligro010 from "../Imagenes/Peligros/Peligro010.png";
import peligro100 from "../Imagenes/Peligros/Peligro1.png";
import peligro110 from "../Imagenes/Peligros/Peligro11.png";
import peligro101 from "../Imagenes/Peligros/Peligro101.png";
import peligro210 from "../Imagenes/Peligros/Peligro21.png";
import peligro301 from "../Imagenes/Peligros/Peligro301.png";
import peligro320 from "../Imagenes/Peligros/Peligro32.png";
import fabricante from "../Imagenes/Banderas/Fabricante.png";
import fabricante4 from "../Imagenes/Banderas/Fabricante4.png";
import fabricante5 from "../Imagenes/Banderas/Fabricante5.png";
import { useRef } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


function Food() {

  const [t] = useTranslation("global");
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior:'smooth' });
  }

  return (
    <section className='bg-gray-200 w-screen h-auto flex justify-center '>
      <TabGroup className="text-black bg-white p-6 w-full">
        <TabList className={`md:space-x-3 flex justify-center pb-5 max-md:flex-col max-md:space-y-3 font-semibold text-lg`}>
          <div className='flex flex-col gap-3'>
            <Tab>
              <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.acidoAcetico")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.acidoCitrico")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.acidoFosforico")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.albuminaHuevo")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.almidones")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.benzoatoSodio")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.carboximetil")}</motion.div>
            </Tab>
          </div>


          <div className='flex flex-col gap-3'>
          <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.carragenato")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.citratoSodio")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.cloruroCalcio")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.dextrosa")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.edta")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.eritorbato")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.gelatina")}</motion.div>
            </Tab>
          </div>


          <div className='flex flex-col gap-3'>
          <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.glutamato")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.gomaGuar")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.gomaXanthan")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.metabisulfito")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.propianato")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.propilenglicol")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.proteina")}</motion.div>
            </Tab>
          </div>


          <div ref={ref} className='flex flex-col gap-3'>
          <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.sorbato")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.tripolifosfatoAli")}</motion.div>
            </Tab>
          </div>
        </TabList>
        <TabPanels>



          {/* ACIDO ACETICO */}
          {/* ACIDO ACETICO */}


           
          <TabPanel >
            <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <ul className='text-center list-disc list-inside text-lg font-semibold'>{t("content.present")}
                <li className='text-left text-base font-normal'>{t("content.200")}
                <div className='flex flex-col items-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
                </li>
                <li className='text-left text-base font-normal'>{t("content.30")}
                <div className='flex flex-col items-center'>
                <img src={imgCarboya} className='w-40 h-auto' alt="Carboya"/>
              </div>
                </li>
              </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indQui")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFarm")}</li>
              <li className=' text-base font-normal text-left'>{t("content.api")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className=' md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro320} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center'>
              <Acetico></Acetico>
          </div>
          </TabPanel>






          {/* ACIDO CITRICO */}
          {/* ACIDO CITRICO */}



          <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}</h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <mdiv className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Paleta de sacos"/>
              </mdiv>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.saborizante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.cosmeticos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.medicos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.antioxidantes")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro210} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center'>
              <AcidoCitrico></AcidoCitrico>
          </div>
          </TabPanel>


          {/* ACIDO FOSFORICO */}
          {/* ACIDO FOSFORICO */}



          <TabPanel>
            <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
          
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <ul className='text-center list-disc list-inside text-lg font-semibold'>{t("content.present")}
                <ul className='list-disc list-inside text-base font-normal'>
                  <li className='text-left'>{t("content.330")}</li>
                  <li className='text-left'>{t("content.340")}</li>
                  <div className='flex flex-col items-center'>
                    <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
                  </div>
                </ul>
                <li className='text-left text-base font-normal'>{t("content.1650")}
                <div className='flex flex-col items-center'>
                <img src={imgIbc} className='w-60 h-auto' alt="IBC"/>
              </div>
                </li>
              </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indAgro")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFooDrinks")}</li>
              <li className=' text-base font-normal text-left'>{t("content.dentales")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
              <img src={brasil} className='w-40 h-auto border-2 border-black' alt="Brasil"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.brasil")}</h4>
            </div>
              <img src={usa} className='w-40 h-auto border-2 border-black' alt="USA"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.usa")}</h4>
            </div>
              <img src={vietnam} className='w-40 h-auto border-2 border-black' alt="Vietnam"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.vietnam")}</h4>
            </div>
            </div>
            </div>
            <div className=' md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro301} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center'>
              <Fosforico></Fosforico>
          </div>
          </TabPanel>


          


        {/* ALBUMINA DE HUEVO */}
        {/* ALBUMINA DE HUEVO */}


          <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center'>{t("content.20")}</h3>
              <h3 className='text-center'>{t("content.pedido")}
              </h3>
            
              <div className='flex justify-center'>
                <img src={imgCaja} className='w-60 h-auto' alt="Caja"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.embutidos")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={vzla} className='w-40 h-auto border-2 border-black' alt="Venezuela"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.vzla")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          </TabPanel>



          {/* ALMIDONES */}           
          {/* ALMIDONES */} 


          <TabPanel>
            <motion.div className={`flex justify-center flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
              <h2 className='text-center border-b-2 border-[#0e1852] text-lg font-semibold'>{t("titles.almidonMaiz")}</h2>
              <div className='flex md:flex-row flex-col justify-center border-b-4 pb-4 border-[#0e1852]'>
              <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
                <h2 className='text-center text-lg font-semibold'>{t("content.present")}
                </h2>
                <h3 className='text-center'>{t("content.25")}</h3>
              
                <div className='flex justify-center'>
                  <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
                </div>
              </div>
              <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
              <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
                <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
                <li className=' text-base font-normal text-left'>{t("content.indFarm")}</li>
                <li className=' text-base font-normal text-left'>{t("content.indAgro")}</li>

              </ul>
              </div>
              <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
              <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
              
              <div className='flex flex-col gap-3 justify-center items-center'>
                <img src={brasil} className='w-40 h-auto border-2 border-black' alt="Brasil"/>
                <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.brasil")}</h4>
            </div>
              </div>
              </div>
              <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
              
              <div className='flex justify-center'>
                <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
              </div>
              </div>
              </div>
            </motion.div>

            <motion.div className={`flex justify-center flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.8,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <h2 className='text-center border-b-2 border-[#0e1852] text-lg font-semibold'>{t("titles.almidonMaizMod")}</h2>
            <div className='flex md:flex-row flex-col justify-center border-b-4 pb-4 border-[#0e1852]'>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFarm")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indTex")}</li>
              <li className=' text-base font-normal text-left'>{t("content.maderas")}</li>
              <li className=' text-base font-normal text-left'>{t("content.proCosmt")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </div>
            </motion.div>

            <motion.div className={`flex justify-center flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 1,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <h2 className='text-center border-b-2 border-[#0e1852] text-lg font-semibold'>{t("titles.almidonYuca")}</h2>
            <div className='flex md:flex-row flex-col justify-center pb-4 border-[#0e1852]'>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indFooDrinks")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFarmCosmt")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indPapel")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indBeer")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indQui")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={tailandia} className='w-40 h-auto border-2 border-black' alt="Tailandia"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.tailandia")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </div>
            <div className='flex items-center justify-center pb-3'>
              <Yuca></Yuca>
          </div>
            </motion.div>
            

            <motion.div className={`flex justify-center flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 1.2,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <h2 className='text-center border-b-2 border-[#0e1852] text-lg font-semibold'>{t("titles.almidonPapa")}</h2>
            <div className='flex md:flex-row flex-col justify-center pb-4 border-[#0e1852]'>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFarm")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indTex")}</li>
              <li className=' text-base font-normal text-left'>{t("content.maderas")}</li>
              <li className=' text-base font-normal text-left'>{t("content.petroleo")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={polonia} className='w-40 h-auto border-2 border-black' alt="Polonia"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.polonia")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center'>
              <Papa></Papa>
          </div>
          </TabPanel>



        {/* BENZOATO DE SODIO  */}           
        {/* BENZOATO DE SODIO  */} 

        <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
          <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.bactericida")}</li>
              <li className=' text-base font-normal text-left'>{t("content.pirotecnia")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro210} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          <div className='flex items-center justify-center'>
              <BenzoatoSodio></BenzoatoSodio>
          </div>
        </TabPanel>



        {/* CARBOXIMETIL CELULOSA- C.MC.  */}           
        {/* CARBOXIMETIL CELULOSA- C.MC.  */}



        <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}</h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Paleta de sacos"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className=' text-base font-normal text-left'>{t("content.impresion")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indCosmt")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <Cmc></Cmc>
          </div>
        </TabPanel>




        {/* CARRAGENATO */}           
        {/* CARRAGENATO */}




        <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}</h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.espesante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.gelificante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.estabilizante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.emulsionante")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          <div className='flex items-center justify-center'>
              <Carragenato></Carragenato>
          </div>
        </TabPanel>



        {/* CITRATO DE SODIO */}           
        {/* CITRATO DE SODIO */}




        <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}</h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.colirio")}</li>
              <li className=' text-base font-normal text-left'>{t("content.antioxidantes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.conservante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.regulador")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          <div className='flex items-center justify-center'>
              <CitratoSodio></CitratoSodio>
          </div>
        </TabPanel>







        {/* CLORURO DE CALCIO */}
        {/* CLORURO DE CALCIO */}


        <TabPanel>
            <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
              <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}</h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFarm")}</li>
              <li className=' text-base font-normal text-left'>{t("content.proConstruc")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indPapelSolo")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={india} className='w-40 h-auto border-2 border-black' alt="India"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.india")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro101} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          <div className='flex items-center justify-center'>
              <CloruroCal></CloruroCal>
          </div>
        </TabPanel>



        {/* DEXTROSA MONOHIDRATA */}
        {/* DEXTROSA MONOHIDRATA */}




        <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.detergente")}</li>
              <li className=' text-base font-normal text-left'>{t("content.grasa")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indPetro")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro110} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <Dextrosa></Dextrosa>
          </div>
        </TabPanel>





        {/* EDTA 2NA DISODICO */}           
        {/* EDTA 2NA DISODICO */}



        <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center text-base'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.trataAgua")}</li>
              <li className=' text-base font-normal text-left'>{t("content.formulacion")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indPetro")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
        </TabPanel>



        {/* ERITORBATO DE SODIO */}           
        {/* ERITORBATO DE SODIO */}
          



        <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center text-base'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.conservante")}</li>
              <li className='text-base font-normal text-left'>{t("content.antioxidantes")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro210} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <Eritorbato></Eritorbato>
          </div>
        </TabPanel>






        {/* GELATINA 250 Y 265 BLOOM */}           
        {/* GELATINA 250 Y 265 BLOOM */}




        <TabPanel>
        <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center text-base'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.gelatina")}</li>
              <li className=' text-base font-normal text-left'>{t("content.reposteria")}</li>
              <li className=' text-base font-normal text-left'>{t("content.helados")}</li>
              <li className=' text-base font-normal text-left'>{t("content.salsas")}</li>
              <li className=' text-base font-normal text-left'>{t("content.otros")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
        </TabPanel>






          {/* GLUTAMATO DE SODIO */}           
          {/* GLUTAMATO DE SODIO */}




          <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center font-normal text-base'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className='text-base font-normal text-left'>{t("content.indFarm")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <Glutamato></Glutamato>
          </div>
          </TabPanel>






        {/* GOMA GUAR 5500 */}           
        {/* GOMA GUAR 5500 */}



          <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.suspension")}</li>
              <li className=' text-base font-normal text-left'>{t("content.estabilizante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.espesanteFood")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <GomaGuar></GomaGuar>
          </div>
          </TabPanel>





        {/* GOMA XANTHAN MALLA 80 y 200 */}           
        {/* GOMA XANTHAN MALLA 80 y 200 */}


        <TabPanel>
        <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center font-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.suspension")}</li>
              <li className=' text-base font-normal text-left'>{t("content.estabilizante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.espesanteVar")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={alemania} className='w-40 h-auto border-2 border-black' alt="Alemania"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.alemania")}</h4>
            </div>
              <h2 className='text-center text-lg font-semibold'>{t("content.fabric")}</h2>
              <img src={fabricante4} className='w-40 h-auto' alt="Fabricante"/>
              <img src={fabricante5} className='w-40 h-auto' alt="Fabricante"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro010} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <GomaXan></GomaXan>
          </div>
        </TabPanel>


        {/* METABISULFITO DE SODIO */}           
        {/* METABISULFITO DE SODIO */}


        <TabPanel>
        <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className=' text-base font-normal text-left'>{t("content.trataAgua")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={alemania} className='w-40 h-auto border-2 border-black' alt="Alemania"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.alemania")}</h4>
            </div>
              <img src={usa} className='w-40 h-auto border-2 border-black' alt="USA"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.usa")}</h4>
            </div>
              <h2 className='text-center text-lg font-semibold'>{t("content.fabric")}</h2>
              <img src={fabricante} className='w-40 h-auto' alt="Fabricante"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro301} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center'>
              <Metabisulfato></Metabisulfato>
          </div>
        </TabPanel>






        {/* PROPIANATO DE CALCIO */}           
        {/* PROPIANATO DE CALCIO */}



        <TabPanel>
        <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.previene")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro210} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <Propianato></Propianato>
          </div>
        </TabPanel>






        


        {/* PROPILENGLICOL */}           
        {/* PROPILENGLICOL */}




        <TabPanel>
        <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.present")}
            </h2>
            <h3 className='text-base text-center font-normal'>{t("content.215")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indCosmt")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFarm")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indMec")}</li>
              <li className=' text-base font-normal text-left'>{t("content.refrigeracion")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={corea} className='w-40 h-auto border-2 border-black' alt="Corea"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.corea")}</h4>
            </div>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro110} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center'>
              <Propil></Propil>
          </div>
        </TabPanel>







        {/* PROTEINA AISLADA DE SOYA */}           
        {/* PROTEINA AISLADA DE SOYA */}



        <TabPanel>
        <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className=' text-center text-base fonr-normal'>{t("content.s20")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.embutidos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.adhesivos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.asfalto")}</li>
              <li className=' text-base font-normal text-left'>{t("content.pinturas")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indTex")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <ProteinaSoya></ProteinaSoya>
          </div>
        </TabPanel>





        {/* SORBATO DE POTASIO */}           
        {/* SORBATO DE POTASIO */}



        <TabPanel>
        <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-base font-normal text-center'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className=' text-left text-base font-normal'>{t("content.vinos")}</li>
              <li className=' text-left text-base font-normal'>{t("content.envasados")}</li>
              <li className=' text-left text-base font-normal'>{t("content.gaseosas")}</li>
              <li className=' text-left text-base font-normal'>{t("content.pizza")}</li>
              <li className=' text-left text-base font-normal'>{t("content.fermentacion")}</li>
              <li className=' text-left text-base font-normal'>{t("content.humectante")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <Sorbato></Sorbato>
          </div>
        </TabPanel>



        {/* TRIPOLIFOSFATO DE SODIO (Grado Alimenticio) */}           
        {/* TRIPOLIFOSFATO DE SODIO (Grado Alimenticio) */}





          <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className='text-center text-base'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center text-lg font-semibold'>{t("content.uses")}
              <li className='font-normal text-base  text-left'>{t("content.conservador")}</li>
              <li className='font-normal text-base  text-left'>{t("content.dispersante")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={kazajistan} className='w-40 h-auto border-2 border-black' alt="Kazajistan"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.kazajistan")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
            <div className='flex items-center justify-center'>
              <Tripolifosfato></Tripolifosfato>
          </div>
          </TabPanel>

        </TabPanels>
      </TabGroup>
    </section>
  )
}
export default Food