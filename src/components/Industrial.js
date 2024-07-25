import React from 'react';
import AceiteMin from './Botones-Descarga/AceiteMineral';
import AceiteMineral from './DescargaFicha/AceiteMin';
import AcetatoN from "./Botones-Descarga/AcetatoN";
import AcetatoN2 from "./DescargaFicha/AcetatoN";
import Acetico from "./Botones-Descarga/Acetico";
import AceticoN2 from "./DescargaFicha/AcidoAcetico";
import Sulfonico from "./Botones-Descarga/Sulfonico";
import SulfonicoCol from "./DescargaFicha/SulfonicoCol";
import SulfonicoCorea from "./DescargaFicha/SulfonicoCorea";
import SulfonicoQatar from "./DescargaFicha/SulfonicoQatar";
import Isopropilico from "./Botones-Descarga/Isopropilico";
import IsopropilicoChina from "./DescargaFicha/IsopropilicoChina";
import IsopropilicoHolanda from "./DescargaFicha/IsopropilicoHol";
import Butildiglicol from "./Botones-Descarga/Butildiglicol";
import Butildiglicol2 from "./DescargaFicha/Diglicol";
import Butilglicol from "./Botones-Descarga/Butilglicol";
import Butilglicol2 from "./DescargaFicha/Butilglicol";
import CloruroMet from "./Botones-Descarga/CloruroMet";
import CloruroMet2 from "./DescargaFicha/CloruroMet"
import Dietilenglicol from "./Botones-Descarga/Dietilenglicol";
import Dietilenglicol2 from "./DescargaFicha/Dietilenglicol";
import HidroxidoPot from "./Botones-Descarga/HidroxidoPot";
import HidroxidoPot2 from "./DescargaFicha/HidroxidoPot";
import Monoetlineglicol from "./Botones-Descarga/Monoetilenglicol";
import Paraformalehido from "./Botones-Descarga/Paraformalehido";
import Paraformalehido2 from "./DescargaFicha/Paraforma";
import Polietilno from "./DescargaFicha/Polietileno";
import SodaCaustica from "./Botones-Descarga/SodaCaustica";
import SodaEscamas from "./DescargaFicha/SodaEscamas";
import SodaLiquida from "./DescargaFicha/SodaLiquida";
import SodaRokita from "./DescargaFicha/SodaRokita";
import SulfatoAlu from "./Botones-Descarga/SulfatoAlu";
import SulfatoAlu2 from "./DescargaFicha/SulfatoAluminio";
import Xileno from "./Botones-Descarga/Xileno";
import Xileno2 from "./DescargaFicha/Xileno";
import imgTambor from "../Imagenes/Productos/Tambor.png";
import imgTambor2 from "../Imagenes/Productos/Tambor2.png";
import imgTamborVerde from "../Imagenes/Productos/TamborVerde.png";
import imgCarboya from "../Imagenes/Productos/Carboya.png";
import imgIbc from "../Imagenes/Productos/IBC.png";
import imgSaco from "../Imagenes/Productos/Saco.png";
import imgCisterna from "../Imagenes/Productos/Cisterna.png";
import india from "../Imagenes/Banderas/india.png";
import emiratosArabes from "../Imagenes/Banderas/EmiratosArabes.png";
import newAfrica from "../Imagenes/Banderas/NuevaAfrica.png";
import peru from "../Imagenes/Banderas/Peru.png";
import colombia from "../Imagenes/Banderas/Colombia.png";
import corea from "../Imagenes/Banderas/Corea.png";
import noruega from "../Imagenes/Banderas/Noruega.png";
import qatar from "../Imagenes/Banderas/Qatar.jpg";
import paisesBajos from "../Imagenes/Banderas/PaisesBajos.png";
import rusia from "../Imagenes/Banderas/Rusia.png";
import china from "../Imagenes/Banderas/china.jfif";
import usa from "../Imagenes/Banderas/Usa.png";
import vzla from "../Imagenes/Banderas/Venezuela.png";
import polonia from "../Imagenes/Banderas/Polonia.png";
import peligro0 from "../Imagenes/Peligros/Peligro0.png";
import peligro010 from "../Imagenes/Peligros/Peligro.png";
import peligro100 from "../Imagenes/Peligros/Peligro1.png";
import peligro110 from "../Imagenes/Peligros/Peligro11.png";
import peligro130 from "../Imagenes/Peligros/Peligro13.png";
import peligro210 from "../Imagenes/Peligros/Peligro21.png";
import peligro211 from "../Imagenes/Peligros/Peligro211.png";
import peligro220 from "../Imagenes/Peligros/Peligro22.png";
import peligro230 from "../Imagenes/Peligros/Peligro23.png";
import peligro301 from "../Imagenes/Peligros/Peligro301.png";
import peligro320 from "../Imagenes/Peligros/Peligro32.png";
import peligro321 from "../Imagenes/Peligros/Peligro321.png";
import peligroManos from "../Imagenes/Peligros/PeligroManos.png";
import fabricante from "../Imagenes/Banderas/Fabricante.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useRef } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


function Industrial() {

  const [t] = useTranslation("global");
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior:'smooth' });
  }

  return (
    <section  className='bg-gray-200 w-screen h-auto flex justify-center '>
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
              >{t("titles.aceiteMineral")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.acetatoN")}</motion.div>
            </Tab>
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
              >{t("titles.acidoSulfonico")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.alcoholIso")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.butilDig")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.butilGlicol")}</motion.div>
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
              >{t("titles.cloruroMetileno")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.dietilenglicol")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.hidroxido")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.monoetilenglicol")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.paraformalehido")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.polietileno")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.sodacaustica")}</motion.div>
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
              >{t("titles.sulfatoAluminio")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.sulfatoLiquido")}</motion.div>
            </Tab>
            <Tab>
            <motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.xileno")}</motion.div>
            </Tab>
          </div>

        </TabList>
        <TabPanels >
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
            
            <div className='flex flex-col justify-center items-center'>
              <img src={india} className='w-40 h-auto border-2 border-black' alt="India"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.india")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro010} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          <div className='flex md:flex-row flex-col gap-3 items-center justify-center'>
              <AceiteMin></AceiteMin>
              <AceiteMineral></AceiteMineral>
          </div>
          </TabPanel>




          {/* ACETATO DE N-PROPILO */}
          {/* ACETATO DE N-PROPILO */}




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
              <h3 className='text-base font-normal text-center'>{t("content.180")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.disolvente")}</li>
              <li className='text-base font-normal text-left'>{t("content.recubrimientosPint")}</li>
              <li className='text-base font-normal text-left'>{t("content.cosmeticosSolo")}</li>
              <li className='text-base font-normal text-left'>{t("content.perfumes")}</li>
              <li className='text-base font-normal text-left'>{t("content.aceitesRes")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro130} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <AcetatoN></AcetatoN>
              <AcetatoN2></AcetatoN2>
          </div>
          </TabPanel>





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
            
            <div className='flex flex-col justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
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
            <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <Acetico></Acetico>
              <AceticoN2></AceticoN2>
          </div>
          </TabPanel>


          {/* ACIDO SULFONICO */}
          {/* ACIDO SULFONICO */}



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
              <ul className='text-center '>{t("content.present")}
                <li>
                  <ul className='list-disc list-inside text-left  text-base font-normal'>
                    <li>{t("content.215")}</li>
                    <li>{t("content.220")}</li>
                    <li>{t("content.250")}</li>
                  </ul>
                      <div className='flex flex-col items-center'>
                      <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
                    </div>
                  
                </li>
                <li className='list-disc list-inside text-left  text-base font-normal'>{t("content.1000k")}
                <div className='flex flex-col items-center'>
                <img src={imgIbc} className='w-40 h-auto' alt="Carboya"/>
              </div>
                </li>
              </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.detergenteSub")}</li>
              <li className=' text-base font-normal text-left'>{t("content.humectanteSolo")}</li>
              <li className=' text-base font-normal text-left'>{t("content.emulsificante")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={india} className='w-40 h-auto border-2 border-black' alt="India"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.india")}</h4>
            </div>
              <img src={peru} className='w-40 h-auto border-2 border-black' alt="Peru"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.peru")}</h4>
            </div>
              <img src={colombia} className='w-40 h-auto border-2 border-black' alt="colombia"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.colombia")}</h4>
            </div>
              <img src={corea} className='w-40 h-auto border-2 border-black' alt="Corea del Sur"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.corea")}</h4>
            </div>
              <img src={noruega} className='w-40 h-auto border-2 border-black' alt="Noruega"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.noruega")}</h4>
            </div>
              <img src={qatar} className='w-40 h-auto border-2 border-black' alt="Qatar"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.qatar")}</h4>
            </div>
            </div>
            </div>
            <div className=' md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center gap-3 flex-col items-center'>
            <img src={peligro211} className='w-40 h-auto' alt="peligro"/>
              <img src={peligroManos} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <Sulfonico></Sulfonico>
              <SulfonicoCol></SulfonicoCol>
              <SulfonicoCorea></SulfonicoCorea>
              <SulfonicoQatar></SulfonicoQatar>
          </div>
          </TabPanel>


          {/* ALCOHOL ISOPROPILICO */}
          {/* ALCOHOL ISOPROPILICO */}


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
                <ul className='list-inside list-disc text-left text-base font-normal'>
                  <li>{t("content.160")}</li>
                  <li>{t("content.165")}</li>
                </ul>
              </h2>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.bactericidaSolo")}</li>
              <li className=' text-base font-normal text-left'>{t("content.gelAnti")}</li>
              <li className=' text-base font-normal text-left'>{t("content.desinfeccion")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
              <img src={paisesBajos} className='w-40 h-auto border-2 border-black' alt="Paises bajos"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.paises")}</h4>
            </div>
              <img src={rusia} className='w-40 h-auto border-2 border-black' alt="Rusia"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.rusia")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro230} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <Isopropilico></Isopropilico>
              <IsopropilicoChina></IsopropilicoChina>
              <IsopropilicoHolanda></IsopropilicoHolanda>
          </div>
          </TabPanel>



           {/* Butil Diglicol */}           
           {/* Butil Diglicol */} 


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
              <h3 className='text-center text-base font-normal'>{t("content.200")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.diluyente")}</li>
              <li className='text-base font-normal text-left'>{t("content.recubrimientos")}</li>
              <li className='text-base font-normal text-left'>{t("content.solventeMutuo")}</li>
              <li className='text-base font-normal text-left'>{t("content.solventeAcopla")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro220} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <Butildiglicol></Butildiglicol>
              <Butildiglicol2></Butildiglicol2>
          </div>
          </TabPanel>



          {/* Butilglicol */}           
          {/* Butilglicol */} 

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
                <ul className='list-inside list-disc text-left text-base font-normal'>
                  <li>{t("content.180")}</li>
                  <li>{t("content.190")}</li>
                </ul>
              </h2>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.solventes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.recubrimientos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.barnices")}</li>
              <li className=' text-base font-normal text-left'>{t("content.desengrasanteMet")}</li>
              <li className=' text-base font-normal text-left'>{t("content.aditivos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.polimeros")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
              <img src={paisesBajos} className='w-40 h-auto border-2 border-black' alt="Paises Bajos"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.paises")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro220} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <Butilglicol></Butilglicol>
              <Butilglicol2></Butilglicol2>
          </div>
          </TabPanel>



          {/* CLORURO DE METILENO */}           
          {/* CLORURO DE METILENO */}



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
                <ul className='list-inside list-disc text-base font-normal text-left'>
                  <li>{t("content.270")}</li>
                  <li>{t("content.260")}</li>
                </ul>
              </h2>
            
              <div className='flex justify-center'>
                <img src={imgTambor2} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.remocion")}</li>
              <li className='text-base font-normal text-left'>{t("content.desengrasanteMet")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
              <img src={rusia} className='w-40 h-auto border-2 border-black' alt="Rusia"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.rusia")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro210} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <CloruroMet></CloruroMet>
              <CloruroMet2></CloruroMet2>
          </div>
          </TabPanel>




          {/* DIETILENGLICOL */}           
          {/* DIETILENGLICOL */}




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
              <ul className='text-center list-disc list-inside'>{t("content.present")} 
                <li className='text-left text-base font-normal'>{t("content.1150")}</li>
                <li className='text-left text-base font-normal'>{t("content.contenedor")}</li>
              </ul>
            
              <div className='flex justify-center'>
                <img src={imgIbc} className='w-60 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.pigmentos")}</li>
              <li className='text-base font-normal text-left'>{t("content.fabricResina")}</li>
              <li className='text-base font-normal text-left'>{t("content.polietilenglicoles")}</li>
              <li className='text-base font-normal text-left'>{t("content.humectanteTab")}</li>
              <li className='text-base font-normal text-left'>{t("content.alquidalicas")}</li>
              <li className='text-base font-normal text-left'>{t("content.automotrices")}</li>
              <li className='text-base font-normal text-left'>{t("content.pet")}</li>
              <li className='text-base font-normal text-left'>{t("content.poliuretano")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center items-center'>
              <img src={paisesBajos} className='w-40 h-auto border-2 border-black' alt="Paises Bajos"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.paises")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro110} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <Dietilenglicol></Dietilenglicol>
              <Dietilenglicol2></Dietilenglicol2>
          </div>

          </TabPanel>



          {/* HIDROXIDO DE POTASIO */}           
          {/* HIDROXIDO DE POTASIO */}




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
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.carbonato")}</li>
              <li className='text-base font-normal text-left'>{t("content.fosfato")}</li>
              <li className='text-base font-normal text-left'>{t("content.fertilizante")}</li>
              <li className='text-base font-normal text-left'>{t("content.jabonesPotasio")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex  flex-col justify-center items-center'>
              <img src={rusia} className='w-40 h-auto border-2 border-black' alt="Rusia"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.rusia")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro301} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <HidroxidoPot></HidroxidoPot>
              <HidroxidoPot2></HidroxidoPot2>
          </div>

          </TabPanel>



            {/* MONOETILENGLICOL */}
            {/* MONOETILENGLICOL */}


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
            <ul className='text-center '>{t("content.present")}
                <li>
                  <ul className='list-disc list-inside text-center text-base font-normal'>
                    <li className='text-left'>{t("content.270")}</li>
                  </ul>
                      <div className='flex flex-col items-center'>
                      <img src={imgTamborVerde} className='w-60 h-auto' alt="Tambor"/>
                    </div>
                  
                </li>
                <li>
                  <ul className='list-disc list-inside text-center text-base font-normal'>
                    <li className='text-left'>{t("content.1089")}</li>
                    <li className='text-left'>{t("content.1120")}</li>
                  </ul>
                      <div className='flex flex-col items-center text-base font-normal'>{t("content.contenedorSolo")}
                      <img src={imgIbc} className='w-40 h-auto' alt="IBC"/>
                    </div>
                  
                </li>
              </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.anticongelantes")}</li>
              <li className='text-base font-normal text-left'>{t("content.disolventePlast")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={usa} className='w-40 h-auto border-2 border-black' alt="USA"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.usa")}</h4>
            </div>
              <img src={paisesBajos} className='w-40 h-auto border-2 border-black' alt="Paises Bajos"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.paises")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro110} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          <div className='flex items-center justify-center'>
              <Monoetlineglicol></Monoetlineglicol>
          </div>
          </TabPanel>



          


          {/* PARAFORMALEHIDO */}           
          {/* PARAFORMALEHIDO */}



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
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.indAgri")}</li>
              <li className='text-base font-normal text-left'>{t("content.fungicida")}</li>
              <li className='text-base font-normal text-left'>{t("content.conservaMadera")}</li>
              <li className='text-base font-normal text-left'>{t("content.proFormol")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro321} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <Paraformalehido></Paraformalehido>
              <Paraformalehido2></Paraformalehido2>
          </div>

          </TabPanel>





          {/* POLIETILENO DE ALTA DENSIDAD (HDPE) */}           
          {/* POLIETILENO DE ALTA DENSIDAD (HDPE) */}



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
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
              <h3 className='text-center text-base font-normal'>{t("content.contenedorSolo")}</h3>
              
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.indAgri")}</li>
              <li className='text-base font-normal text-left'>{t("content.fungicida")}</li>

            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center items-center'>
              <img src={usa} className='w-40 h-auto border-2 border-black' alt="USA"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.usa")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro0} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center'>
              <Polietilno></Polietilno>
            </div>

          </TabPanel>





          {/* SODA CAUSTICA */}           
          {/* SODA CAUSTICA */}



          <TabPanel>
          <motion.div className={`flex justify-center flex-col  border-t-4 border-[#0e1852] font-semibold text-lg`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.6,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <h2 className='text-center border-b-2 border-[#0e1852]'>{t("titles.sodaEscamas")}</h2>
            <div className='flex md:flex-row flex-col justify-center border-b-4 pb-4 border-[#0e1852]'>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center'>{t("content.present")}
              </h2>
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.jabones")}</li>
              <li className=' text-base font-normal text-left'>{t("content.detergentes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.limpDes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.limpHornos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.pinturas")}</li>
              <li className=' text-base font-normal text-left'>{t("content.proPetro")}</li>
              <li className=' text-base font-normal text-left'>{t("content.papel")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indTex")}</li>
              <li className=' text-base font-normal text-left'>{t("content.explosivos")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={india} className='w-40 h-auto border-2 border-black' alt="India"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.india")}</h4>
            </div>
              <img src={peru} className='w-40 h-auto border-2 border-black' alt="Peru"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.peru")}</h4>
            </div>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="china"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.china")}</h4>
            </div>
              <img src={newAfrica} className='w-40 h-auto border-2 border-black' alt="Nueva Africa"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.africa")}</h4>
            </div>
              <img src={emiratosArabes} className='w-40 h-auto border-2 border-black' alt="Emiratos Arabes"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.emiratos")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro301} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center pb-7'>
              <SodaEscamas></SodaEscamas>
            </div>

            <motion.div className={`flex justify-center flex-col   border-[#0e1852] font-semibold text-lg`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 0.8,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <h2 className='text-center border-b-2 border-[#0e1852]'>{t("titles.sodaRokita")}</h2>
            <div className='flex md:flex-row flex-col justify-center border-b-4 pb-4 border-[#0e1852]'>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <h2 className='text-center'>{t("content.present")}
              </h2>
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.jabones")}</li>
              <li className=' text-base font-normal text-left'>{t("content.detergentes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.limpDes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.limpHornos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.pinturas")}</li>
              <li className=' text-base font-normal text-left'>{t("content.proPetro")}</li>
              <li className=' text-base font-normal text-left'>{t("content.papel")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indTex")}</li>
              <li className=' text-base font-normal text-left'>{t("content.explosivos")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={polonia} className='w-40 h-auto border-2 border-black' alt="Polonia"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.polonia")}</h4>
            </div>
              <h2>{t("content.fabric")}</h2>
              <img src={fabricante} className='w-40 h-auto' alt="Fabricante"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro301} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center pb-7'>
              <SodaRokita></SodaRokita>
            </div>


            <motion.div className={`flex justify-center flex-col  border-[#0e1852] font-semibold text-lg`}
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: -10, opacity: 1}}
            transition={{
              delay: 1,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 0.5
            }}>
            <h2 className='text-center border-b-2 border-[#0e1852]'>{t("titles.sodaLiquida")}</h2>
            <div className='flex md:flex-row flex-col justify-center border-b-4 pb-4 border-[#0e1852]'>
            <div className=' md:border-r-4 md:px-2 max-md:border-b-4 max-md:py-5 border-[#0e1852]'>
              <ul className='text-center list-disc list-inside'>{t("content.present")}
                <li className='text-left text-base font-normal'>{t("content.1500")}
                  <div className='flex flex-col items-center'>
                    <img src={imgIbc} className='w-40 h-auto' alt="IBC"/>
                  </div>
                </li>
                <li className='text-left text-base font-normal'>{t("content.cisterna")}
                  <div className='flex flex-col items-center'>
                    <img src={imgCisterna} className='w-40 h-auto' alt="Cisterna"/>
                  </div>
                </li>
              </ul>
            
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.jabones")}</li>
              <li className=' text-base font-normal text-left'>{t("content.detergentes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.limpDes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.limpHornos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.pinturas")}</li>
              <li className=' text-base font-normal text-left'>{t("content.proPetro")}</li>
              <li className=' text-base font-normal text-left'>{t("content.papel")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indTex")}</li>
              <li className=' text-base font-normal text-left'>{t("content.explosivos")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={india} className='w-40 h-auto border-2 border-black' alt="India"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.india")}</h4>
            </div>
              <img src={vzla} className='w-40 h-auto border-2 border-black' alt="Venezuela"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.vzla")}</h4>
            </div>

            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro301} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center pb-2'>
              <SodaLiquida></SodaLiquida>
            </div>
            <div className='flex items-center justify-center'>
              <SodaCaustica></SodaCaustica>
          </div>
          
          </TabPanel>




          {/* SULFATO DE ALUMINIO */}           
          {/* SULFATO DE ALUMINIO */}



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
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.floculante")}</li>
              <li className='text-base font-normal text-left'>{t("content.aguasServidas")}</li>
              <li className='text-base font-normal text-left'>{t("content.clarificante")}</li>
              <li className='text-base font-normal text-left'>{t("content.indPetro")}</li>
              <li className='text-base font-normal text-left'>{t("content.indPapelSolo")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center items-center'>
              <img src={vzla} className='w-40 h-auto border-2 border-black' alt="Venezuela"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.vzla")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <SulfatoAlu></SulfatoAlu>
              <SulfatoAlu2></SulfatoAlu2>
          </div>

          </TabPanel>





          {/* SULFATO DE ALUMINIO LIQUIDO*/}           
          {/* SULFATO DE ALUMINIO LIQUIDO*/}



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
              <ul className='text-center list-disc list-inside'>{t("content.present")}
                <li className='text-left text-base font-normal'>{t("content.1000R")}
                  <div className='flex flex-col items-center'>
                    <img src={imgIbc} className='w-40 h-auto' alt="IBC"/>
                  </div>
                </li>
                <li className='text-left text-base font-normal'>{t("content.cisterna")}
                  <div className='flex flex-col items-center'>
                    <img src={imgCisterna} className='w-60 h-auto' alt="Cisterna"/>
                  </div>
                </li>
              </ul>
            
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.floculante")}</li>
              <li className='text-base font-normal text-left'>{t("content.aguasServidas")}</li>
              <li className='text-base font-normal text-left'>{t("content.clarificante")}</li>
              <li className='text-base font-normal text-left'>{t("content.indPetro")}</li>
              <li className='text-base font-normal text-left'>{t("content.indPapelSolo")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={vzla} className='w-40 h-auto border-2 border-black' alt="Venezuela"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.vzla")}</h4>
            </div>

            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center'>
              <SulfatoAlu></SulfatoAlu>
          </div>

          </TabPanel>





          {/* XILENO */}
          {/* XILENO */}




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
              <h3 className='text-center text-base font-normal'>{t("content.190")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='text-base font-normal text-left'>{t("content.disolventeImp")}</li>
              <li className='text-base font-normal text-left'>{t("content.agenteLimp")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col justify-center items-center'>
              <img src={paisesBajos} className='w-40 h-auto border-2 border-black' alt="Paises Bajos"/>
              <div className='flex justify-center'>
              <h4 className='font-bold'>{t("flags.paises")}</h4>
            </div>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro230} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
            <div className='flex items-center justify-center md:flex-row flex-col gap-3 '>
              <Xileno></Xileno>
              <Xileno2></Xileno2>
          </div>

          </TabPanel>

        </TabPanels>
      </TabGroup>
    </section>
  )
}
export default Industrial