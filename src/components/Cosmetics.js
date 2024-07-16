import React, { useRef } from 'react';
import imgTambor from "../Imagenes/Productos/Tambor.png";
import imgTambor2 from "../Imagenes/Productos/Tambor2.png";
import imgTamborVerde from "../Imagenes/Productos/TamborVerde.png";
import imgCaja from "../Imagenes/Productos/Caja.jpg";
import imgPaletSacos from "../Imagenes/Productos/PaletaSacos.png";
import imgFlexibag from "../Imagenes/Productos/Flexibag.png";
import imgIbc from "../Imagenes/Productos/IBC.png";
import imgCarboya from "../Imagenes/Productos/Carboya.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import india from "../Imagenes/Banderas/india.png";
import peru from "../Imagenes/Banderas/Peru.png";
import malasia from "../Imagenes/Banderas/Malasia.png";
import corea from "../Imagenes/Banderas/Corea.png";
import rusia from "../Imagenes/Banderas/Rusia.png";
import china from "../Imagenes/Banderas/china.jfif";
import usa from "../Imagenes/Banderas/Usa.png";
import vzla from "../Imagenes/Banderas/Venezuela.png";
import indonesia from "../Imagenes/Banderas/Indonesia.png";
import brasil from "../Imagenes/Banderas/Brasil.jpg";
import argentina from "../Imagenes/Banderas/Argentina.png";
import alemania from "../Imagenes/Banderas/Alemania.png";
import peligro0 from "../Imagenes/Peligros/Peligro0.png";
import peligro010 from "../Imagenes/Peligros/Peligro.png";
import peligro100 from "../Imagenes/Peligros/Peligro1.png";
import peligro110 from "../Imagenes/Peligros/Peligro11.png";
import peligro130 from "../Imagenes/Peligros/Peligro13.png";
import peligro210 from "../Imagenes/Peligros/Peligro21.png";
import peligro211 from "../Imagenes/Peligros/Peligro211.png";
import peligro310 from "../Imagenes/Peligros/Peligro31.png";
import fabricante2 from "../Imagenes/Banderas/Fabricante2.png";
import fabricante3 from "../Imagenes/Banderas/Fabricante3.png";
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";


function Cosmetics() {

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
                delay: -0.5,
              }}
              >{t("titles.aceiteMineral")}
              </motion.div>
            </Tab>


            <Tab>
              <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.acidoEstearico")}</motion.div>
            </Tab>


            <Tab>
              <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.alcoholCetilico")}
              </motion.div>
            </Tab>

            <Tab>
             <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.alcoholEtilico")}
              </motion.div>
            </Tab>

            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.butilAcetato")}
              </motion.div>
            </Tab>

            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.carbomer")}</motion.div>
            </Tab>

            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.cloruroCetrimonio")}</motion.div>
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
              >{t("titles.cocamida")}</motion.div>
            </Tab>

            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.cocoamido")}</motion.div>
            </Tab>

            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.colorantes")}</motion.div>
            </Tab>

            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.glicerina")}</motion.div>
            </Tab>

            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.nipacidex")}</motion.div>
            </Tab>

            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.nonil")}</motion.div>
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
            
            
          </div>

          <div ref={ref} className='flex flex-col gap-3'>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.genapol")}</motion.div>
            </Tab>

            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.texapon")}</motion.div>
            </Tab>

          </div>
        </TabList>
        <TabPanels>
        <TabPanel>
        <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852] font-semibold text-lg`}
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
              <h2 className='text-center'>{t("content.present")}</h2>
              <h3 className='text-center  text-base font-normal'>{t("content.200")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='  text-base font-normal text-left'>{t("content.cremas")}</li>
              <li className='  text-base font-normal text-left'>{t("content.adhesivos")}</li>
              <li className='  text-base font-normal text-left'>{t("content.lubricantes")}</li>
              <li className='  text-base font-normal text-left'>{t("content.desmoldantes")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex justify-center'>
              <img src={india} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro010} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>

          </TabPanel>



      {/* ACIDO ESTEARICO */}           
      {/* ACIDO ESTEARICO */} 


        <TabPanel>
        <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852] font-semibold text-lg`}
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
            <h2 className='text-center'>{t("content.present")}
              </h2>
              <h3 className='text-center  text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.lociones")}</li>
              <li className=' text-base font-normal text-left'>{t("content.jabones")}</li>
              <li className=' text-base font-normal text-left'>{t("content.desodorantes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.velas")}</li>
              <li className=' text-base font-normal text-left'>{t("content.cauchos")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={malasia} className='w-40 h-auto border-2 border-black' alt="Malasia"/>
              <img src={indonesia} className='w-40 h-auto border-2 border-black' alt="Indonesia"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro110} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            
            </motion.div>
          </TabPanel>
          



        {/* ALCOHOL CETILICO */}           
        {/* ALCOHOL CETILICO */} 


         <TabPanel>
         <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852] font-semibold text-lg`}
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
            <h2 className='text-center'>{t("content.present")}
                <ul className='list-inside list-disc  text-base font-normal'>
                  <li className='text-left'>{t("content.22")}</li>
                  <li className='text-left'>{t("content.25")}</li>
                </ul>
              </h2>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.lociones")}</li>
              <li className=' text-base font-normal text-left'>{t("content.suavizantes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indCosmt")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={india} className='w-40 h-auto border-2 border-black' alt="India"/>
              <img src={usa} className='w-40 h-auto border-2 border-black' alt="USA"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            
          </TabPanel>






      {/* ALCOHOL ETILICO */}           
      {/* ALCOHOL ETILICO */} 


      <TabPanel>
      <motion.div className={` font-semibold text-lg flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]`}
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
            <h2 className='text-center'>{t("content.present")}
              </h2>
              <h3 className='text-center  text-base font-normal'>{t("content.1000")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgIbc} className='w-60 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.sanitizantes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.antibacterial")}</li>
              <li className=' text-base font-normal text-left'>{t("content.otros")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={brasil} className='w-40 h-auto border-2 border-black' alt="Brasil"/>
              <img src={usa} className='w-40 h-auto border-2 border-black' alt="USA"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro110} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>





        {/* BUTIL ACETATO */}           
        {/* BUTIL ACETATO */} 



          <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852] text-lg font-semibold`}
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
              <h2 className='text-center'>{t("content.present")}</h2>
              <h3 className='text-center  text-base font-normal'>{t("content.180")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='  text-base font-normal text-left'>{t("content.quitaEsmaltes")}</li>
              <li className='  text-base font-normal text-left'>{t("content.peliculas")}</li>
              <li className='  text-base font-normal text-left'>{t("content.lacas")}</li>
              <li className='  text-base font-normal text-left'>{t("content.perfumes")}</li>
              <li className='  text-base font-normal text-left'>{t("content.aceites")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro130} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>






        {/* CARBOMER */}           
        {/* CARBOMER */} 



      
          <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852] text-lg font-semibold`}
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
              <h2 className='text-center'>{t("content.present")}
              </h2>
              <h3 className='text-center  text-base font-normal'>{t("content.20")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgCaja} className='w-60 h-auto' alt="Caja"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.geles")}</li>
              <li className=' text-base font-normal text-left'>{t("content.gelesCremas")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={usa} className='w-40 h-auto border-2 border-black' alt="USA"/>
              <h2>{t("content.fabric")}</h2>
              <img src={fabricante3} className='w-40 h-auto' alt="Fabricante"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>


          {/* CLORURO DE CETRIMONIO (30%)  GENAMIN */}           
          {/* CLORURO DE CETRIMONIO (30%)  GENAMIN */} 



          <TabPanel>
          <motion.div className={`flex justify-center md:flex-row flex-col  border-t-4 border-[#0e1852]  text-lg font-semibold`}
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
              <h2 className='text-center'>{t("content.present")}</h2>
              <h3 className='text-center text-base font-normal'>{t("content.200")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.balsamos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.enjuague")}</li>
              <li className=' text-base font-normal text-left'>{t("content.capilar")}</li>
              <li className=' text-base font-normal text-left'>{t("content.acondicionador")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center '>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>





          {/* COCAMIDA DEA */}           
          {/* COCAMIDA DEA */} 

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
              <h2 className='text-center  text-lg font-semibold'>{t("content.present")}</h2>
              <h3 className='text-center'>{t("content.200")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center  text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.agenteHumec")}</li>
              <li className=' text-base font-normal text-left'>{t("content.espuma")}</li>
              <li className=' text-base font-normal text-left'>{t("content.irritacion")}</li>
              <li className=' text-base font-normal text-left'>{t("content.suave")}</li>
              <li className=' text-base font-normal text-left'>{t("content.emulsionante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.desengrasante")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro310} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>





          {/* COCOAMIDOPROPIL BETAINA */}           
          {/* COCOAMIDOPROPIL BETAINA */}



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
              <h2 className='text-center  text-lg font-semibold'>{t("content.present")}</h2>
              <h3 className='text-center'>{t("content.200")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center  text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.shampoo")}</li>
              <li className=' text-base font-normal text-left'>{t("content.gelDucha")}</li>
              <li className=' text-base font-normal text-left'>{t("content.higieneNiños")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro310} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>




        {/* COLORANTES LIQUIDOS (Solubles en agua) */}           
        {/* COLORANTES LIQUIDOS (Solubles en agua) */} 



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
              <h2 className='text-center  text-lg font-semibold'>{t("content.present")}</h2>
              <h3 className='text-center'>{t("content.9")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgCarboya} className='w-40 h-auto' alt="Carboya"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center  text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indLimp")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indCosmt")}</li>
              <li className=' text-base font-normal text-left'>{t("content.higienePer")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex justify-center'>
              <img src={usa} className='w-40 h-auto border-2 border-black' alt="USA"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro110} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>






          {/* GLICERINA VEGETAL USP (99.7%) */}
          {/* GLICERINA VEGETAL USP (99.7%) */}


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
            <ul className='text-center  text-lg font-semibold'>{t("content.present")}
                <li>
                    <ul className=' list-disc list-inside text-base font-normal'>
                        <li className='text-left'>{t("content.250")}</li>
                        <li className='text-left'>{t("content.265")}</li>
                        <li className='text-left'>{t("content.270")}</li>
                        <li className='text-left'>{t("content.275")}</li>
                    </ul>
                <div className='flex flex-col items-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
                </li>
                <li className=' list-disc list-inside text-left text-base font-normal'>{t("content.24000")}
                <div className='flex flex-col items-center'>{t("content.ventaFlexi")}

                <img src={imgFlexibag} className='w-60 h-auto' alt="Carboya"/>
              </div>
                </li>
              </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center  text-lg font-semibold'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.indFarm")}</li>
              <li className='text-base font-normal text-left'>{t("content.cigarro")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={peru} className='w-40 h-auto border-2 border-black' alt="Peru"/>
              <img src={argentina} className='w-40 h-auto border-2 border-black' alt="Argentina"/>
              <img src={brasil} className='w-40 h-auto border-2 border-black' alt="Brasil"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro110} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
          </TabPanel>






          {/* NIPACIDEXIOLINA -5 */}           
          {/* NIPACIDEXIOLINA -5 */}



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
            <h2 className='text-center  text-lg font-semibold'>{t("content.present")}
                <ul className='list-inside list-disc'>
                  <li className='text-base font-normal text-left'>{t("content.200")}</li>
                  <li className='text-base font-normal text-left'>{t("content.210")}</li>
                  <li className='text-base font-normal text-left'>{t("content.220")}</li>
                </ul>
              </h2>
            
              <div className='flex justify-center'>
                <img src={imgTamborVerde} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center  text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.fabLimp")}</li>
              <li className=' text-base font-normal text-left'>{t("content.biocida")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex justify-center'>
              <img src={vzla} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro211} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>



            



          {/* NONIL FENOL 10 MOLES */}           
          {/* NONIL FENOL 10 MOLES */}
          



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
              <h2 className='text-center  text-lg font-semibold'>{t("content.present")}</h2>
              <h3 className='text-center'>{t("content.215")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTamborVerde} className='w-60 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center  text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.detergenteLimp")}</li>
              <li className=' text-base font-normal text-left'>{t("content.pinturas")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indTex")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={rusia} className='w-40 h-auto border-2 border-black' alt="Rusia"/>
              <img src={brasil} className='w-40 h-auto border-2 border-black' alt="Brasil"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro210} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

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
            <h2 className='text-center  text-lg font-semibold'>{t("content.present")}
              </h2>
              <h3 className=' text-center'>{t("content.215")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor2} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center  text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.indCosmt")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFarm")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFarm")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indMec")}</li>
              <li className=' text-base font-normal text-left'>{t("content.refrigeracion")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={corea} className='w-40 h-auto border-2 border-black' alt="Corea"/>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro110} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>
          






          {/* SLES 70% (GENAPOL) */}           
          {/* SLES 70% (GENAPOL) */}




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
            <h2 className='text-center  text-lg font-semibold'>{t("content.present")} 
                <ul className='list-inside list-disc text-base font-normal'>
                  <li className='text-left'>{t("content.165")}</li>
                  <li className='text-left'>{t("content.170")}</li>
                  <li className='text-left'>{t("content.240")}</li>
                </ul>
              </h2>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center  text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.shampoo")}</li>
              <li className=' text-base font-normal text-left'>{t("content.detergentes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.jabones")}</li>
              <li className=' text-base font-normal text-left'>{t("content.pastaDiente")}</li>
              <li className=' text-base font-normal text-left'>{t("content.gelDucha")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={corea} className='w-40 h-auto border-2 border-black' alt="Corea"/>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <img src={alemania} className='w-40 h-auto border-2 border-black' alt="Alemania"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>

          </TabPanel>







        {/* TEXAPON */}           
        {/* TEXAPON */}


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
            <h2 className='text-center  text-lg font-semibold'>{t("content.present")}</h2>
            <h3 className='text-center'>{t("content.235")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center  text-lg font-semibold'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.shampoo")}</li>
              <li className=' text-base font-normal text-left'>{t("content.detergentes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.jabones")}</li>
              <li className=' text-base font-normal text-left'>{t("content.pastaDiente")}</li>
              <li className=' text-base font-normal text-left'>{t("content.gelDucha")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2  text-lg font-semibold'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center pb-4'>
              <img src={alemania} className='w-40 h-auto border-2 border-black' alt="Alemania"/>
              <h2>{t("content.fabric")}</h2>
              <img src={fabricante2} className='w-40 h-auto border-2 border-black ' alt="Fabricante"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center  text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>

          </TabPanel>

        </TabPanels>
      </TabGroup>
    </section>
  )
}
export default Cosmetics