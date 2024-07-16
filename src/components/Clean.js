import React from 'react';
import imgTambor from "../Imagenes/Productos/Tambor.png";
import imgTamborVerde from "../Imagenes/Productos/TamborVerde.png";
import imgCarboya from "../Imagenes/Productos/Carboya.png";
import imgIbc from "../Imagenes/Productos/IBC.png";
import imgSaco from "../Imagenes/Productos/Saco.png";
import imgPaletSacos from "../Imagenes/Productos/PaletaSacos.png";
import imgCisterna from "../Imagenes/Productos/Cisterna.png";
import imgSacosCera from "../Imagenes/Productos/SacosCera.png";
import imgFlexibag from "../Imagenes/Productos/Flexibag.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
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
import indonesia from "../Imagenes/Banderas/Indonesia.png";
import brasil from "../Imagenes/Banderas/Brasil.jpg";
import argentina from "../Imagenes/Banderas/Argentina.png";
import alemania from "../Imagenes/Banderas/Alemania.png";
import malasia from "../Imagenes/Banderas/Malasia.png";
import peligro0 from "../Imagenes/Peligros/Peligro0.png";
import peligro100 from "../Imagenes/Peligros/Peligro1.png";
import peligro110 from "../Imagenes/Peligros/Peligro11.png";
import peligro210 from "../Imagenes/Peligros/Peligro21.png";
import peligro211 from "../Imagenes/Peligros/Peligro211.png";
import peligro220 from "../Imagenes/Peligros/Peligro22.png";
import peligro230 from "../Imagenes/Peligros/Peligro23.png";
import peligro300 from "../Imagenes/Peligros/Peligro3.png";
import peligro310 from "../Imagenes/Peligros/Peligro31.png";
import peligro301 from "../Imagenes/Peligros/Peligro301.png";
import peligro320 from "../Imagenes/Peligros/Peligro32.png";
import peligro321 from "../Imagenes/Peligros/Peligro321.png";
import peligroManos from "../Imagenes/Peligros/PeligroManos.png";
import fabricante from "../Imagenes/Banderas/Fabricante.png";
import fabricante2 from "../Imagenes/Banderas/Fabricante2.png";
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

function Clean() {

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
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.acidoEstearico")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.acidoAcetico")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.acidoSulfonico")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.alcoholIso")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.alcoholCetilico")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.alcoholEtilico")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.butilGlicol")}</motion.div></Tab>
            
          </div>
          <div className='flex flex-col gap-3'>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.escamas")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.cloruroBenzal")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.colorantes")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.formol")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.glicerina")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.metasilicato")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.nipacidex")}</motion.div></Tab>
            
            
          </div>
          <div ref={ref} className='flex flex-col gap-3'>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.nonil")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.peroxido")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.genapol")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.sodacaustica")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.texapon")}</motion.div></Tab>
            <Tab><motion.div  onClick={handleClick} className={`border-2 px-2 rounded-lg border-black bg-[#00c08d] hover:bg-[#F6FA70] focus:bg-[#F6FA70] duration-300 ease-in-out `}
              whileHover={{ y: -5, x: -2, duration: 0.1}}
              transition={{
                duration: 0.1,
                delay: -0.5
              }}
              >{t("titles.tripolifosfatoTec")}</motion.div></Tab>
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
              <h3 className='text-center  text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgPaletSacos} className='w-60 h-auto' alt="Paleta de sacos"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className='  text-base font-normal text-left'>{t("content.lociones")}</li>
              <li className='  text-base font-normal text-left'>{t("content.jabones")}</li>
              <li className='  text-base font-normal text-left'>{t("content.desodorantes")}</li>
              <li className='  text-base font-normal text-left'>{t("content.velas")}</li>
              <li className='  text-base font-normal text-left'>{t("content.cauchos")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={malasia} className='w-40 h-auto border-2 border-black' alt="Singapur"/>
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
            
            <div className='flex justify-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
            </div>
            </div>
            <div className=' md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center text-lg font-semibold'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro320} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
            </motion.div>
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
              <img src={india} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
              <img src={peru} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
              <img src={colombia} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
              <img src={corea} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
              <img src={noruega} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
              <img src={qatar} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
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
              <img src={china} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
              <img src={paisesBajos} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
              <img src={rusia} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro230} className='w-40 h-auto' alt="peligro"/>
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
              <img src={china} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
              <img src={paisesBajos} className='w-40 h-auto border-2 border-black' alt="Tambor"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro220} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          </TabPanel>



          {/* CERA EN ESCAMAS */}           
          {/* CERA EN ESCAMAS */}



          <TabPanel >
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
              <h3 className='text-center text-base font-normal'>{t("content.s20")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSacosCera} className='w-60 h-auto border-2 border-black' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.cera")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={vzla} className='w-40 h-auto border-2 border-black' alt="Venezuela"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
            </div>
            </div>
          </motion.div>
          </TabPanel>




          {/* CLORURO DE BENZALCONIO */}           
          {/* CLORURO DE BENZALCONIO */}




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
              <li className=' text-base font-normal text-left'>{t("content.desinfectante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.bactericidaSolo")}</li>
              <li className=' text-base font-normal text-left'>{t("content.quirurgico")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="China"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro100} className='w-40 h-auto' alt="peligro"/>
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




          {/* FORMOL */}           
          {/* FORMOL */}




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
                  <li className='text-left'>{t("content.220")}</li>
                  <li className='text-left'>{t("content.250")}</li>
                </ul>
              </h2>
            
              <div className='flex justify-center'>
                <img src={imgTambor} className='w-40 h-auto' alt="Tambor"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.conservanteSolo")}</li>
              <li className=' text-base font-normal text-left'>{t("content.keratina")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFarm")}</li>
              <li className=' text-base font-normal text-left'>{t("content.alisadores")}</li>
              <li className=' text-base font-normal text-left'>{t("content.proCap")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={vzla} className='w-40 h-auto border-2 border-black' alt="Venezuela"/>
              <img src={india} className='w-40 h-auto border-2 border-black' alt="India"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro321} className='w-40 h-auto' alt="peligro"/>
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



          {/* METASILICATO DE SODIO PENTAHIDRATADO */}
          {/* METASILICATO DE SODIO PENTAHIDRATADO */}




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
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.detergente")}</li>
              <li className=' text-base font-normal text-left'>{t("content.grasa")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indFood")}</li>
              <li className=' text-base font-normal text-left'>{t("content.indPetro")}</li>

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
              <img src={peligro300} className='w-40 h-auto' alt="peligro"/>
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






        {/* PEROXIDO DE HIDROGENO */}           
        {/* PEROXIDO DE HIDROGENO */}




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
                <li className='text-left text-base font-normal'>{t("content.1200")}
                <div className='flex flex-col items-center'>
                <img src={imgIbc} className='w-40 h-auto' alt="IBC"/>
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
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.acelerantes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.activadores")}</li>
              <li className=' text-base font-normal text-left'>{t("content.catalizadores")}</li>
              <li className=' text-base font-normal text-left'>{t("content.reticulantes")}</li>
              <li className=' text-base font-normal text-left'>{t("content.agenteCur")}</li>
              <li className=' text-base font-normal text-left'>{t("content.endurecedores")}</li>
              <li className=' text-base font-normal text-left'>{t("content.iniciadores")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={corea} className='w-40 h-auto border-2 border-black' alt="Corea"/>
              <img src={brasil} className='w-40 h-auto border-2 border-black' alt="Brasil"/>
            </div>
            </div>
            <div className=' md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
            <div className='flex justify-center'>
              <img src={peligro310} className='w-40 h-auto' alt="peligro"/>
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
              <img src={peru} className='w-40 h-auto border-2 border-black' alt="Peru"/>
              <img src={china} className='w-40 h-auto border-2 border-black' alt="china"/>
              <img src={newAfrica} className='w-40 h-auto border-2 border-black' alt="Nueva Africa"/>
              <img src={emiratosArabes} className='w-40 h-auto border-2 border-black' alt="Emiratos Arabes"/>
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
              <img src={vzla} className='w-40 h-auto border-2 border-black' alt="Peru"/>

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





        {/* TRIPOLIFOSFATO DE SODIO (Grado Técnico) */}           
        {/* TRIPOLIFOSFATO DE SODIO (Grado Técnico) */}





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
              <h3 className='text-center text-base font-normal'>{t("content.25")}</h3>
            
              <div className='flex justify-center'>
                <img src={imgSaco} className='w-40 h-auto' alt="Saco"/>
              </div>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <ul className='list-disc list-inside text-center'>{t("content.uses")}
              <li className=' text-base font-normal text-left'>{t("content.aditivoLimp")}</li>
              <li className=' text-base font-normal text-left'>{t("content.dispersante")}</li>
              <li className=' text-base font-normal text-left'>{t("content.cauchos")}</li>
              <li className=' text-base font-normal text-left'>{t("content.cemento")}</li>
              <li className=' text-base font-normal text-left'>{t("content.recubrimientosPint")}</li>
              <li className=' text-base font-normal text-left'>{t("content.aceitesLub")}</li>
            </ul>
            </div>
            <div className='border-[#0e1852] md:border-r-4 max-md:border-b-4 max-md:py-5 md:px-2'>
            <h2 className='text-center'>{t("content.origin")}</h2>
            
            <div className='flex flex-col gap-3 justify-center items-center'>
              <img src={rusia} className='w-40 h-auto border-2 border-black' alt="Rusia"/>
              <img src={vzla} className='w-40 h-auto border-2 border-black' alt="Venezuela"/>
            </div>
            </div>
            <div className='md:px-2 max-md:pt-5 border-[#0e1852]'>
            <h2 className='text-center'>{t("content.danger")}</h2>
            
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
export default Clean