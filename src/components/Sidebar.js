import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineProduct} from "react-icons/ai";
import { MdSpaceDashboard, MdOutlineWebAsset, MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { RiContactsBook3Line } from "react-icons/ri";
import noumaIco from "../FavIcon/favicon.ico";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import nouma from "../Imagenes/quimicaNOUMA.png";
import React from "react";
import { useTranslation } from "react-i18next";

export const Sidebar = ()=>{
  const [t] = useTranslation("global");
  const [open, setOpen] = useState(true);
  const [submenuopen, setSubmenuOpen] = useState(false);
  const [submenuopen2, setSubmenuOpen2] = useState(true);
  const Menus = [
    { title: t("sidebar.home"), icon: <FiHome />, href: "../Home"},
    { title: t("sidebar.pages"), 
      icon: <MdOutlineWebAsset onClick={() => setOpen(!open) & setSubmenuOpen2(!submenuopen2)} />,
      submenu2: true,
      subemnuItems2: [
        {title: "Grupo Nouma", href: "https://www.gruponouma.com"},
        {title: "Nouma Trading & Logistics", href: "https://noumatrading.com.ve"},
        {title: "Vencatalyst", href: "https://vencatalyst.com.ve"},
      ],
    },
    { title: t("sidebar.products"), 
      icon: <AiOutlineProduct />,
      href: "../Products",
      submenu: true,
      subemnuItems: [
        {title: t("productsMenu.industry"),
        href: "../Products/Industry"
        },
        {title: t("productsMenu.clean"),
          href: "../Products/Cleaning"
        },
        {title: t("productsMenu.cosmetics"),
        href: "../Products/Cosmetics"},
        {title: t("productsMenu.food"),
        href: "../Products/Food"},
      ],
    },
    { title: t("sidebar.contact"), icon: <RiContactsBook3Line />, href: "../Contact"},
  ];
  return (
    <section className="sticky top-0 flex-row">
        <div className="flex">
            <div className={`bg-[#0079FF] h-screen ${open ? "md:w-72 w-60 md:opacity-100 opacity-95" : "md:w-20 w-0"} duration-500 absolute z-10`}>
                <BsArrowLeftShort className={`bg-white text-[#0079FF] text-3xl rounded-full absolute -right-10 top-9 border border-blue-500 cursor-pointer -mt-2 ${!open && "rotate-180"}`} onClick={() => setOpen(!open) & setSubmenuOpen2(!submenuopen2)}/>

                <div className={` bg-white ${!open ? "w-[5rem] items-center md:inline-flex hidden  h-20 px-4": "md:px-16 pl-8"} ${!open ? " py-4 pb-0 duration-500": ""}`}>
                  {!open ? <motion.img id="NoumaIco" src={noumaIco} className={`size-10 cursor-pointer block float-left mr-2 duration-500`}
                   alt="Nouma Icono"
                   /> : <motion.img alt="Nouma Logo" src={nouma} className='block h-auto w-40 cursor-pointer mr-2 duration-500'
                  />}
                </div>
                <div className=" p-5 pt-1">

                <ul className={`pt-2   ${!open ? "max-md:hidden": ""}`}>
                {Menus.map((menu, index) =>(
                    <>
                        <li key={index} className={`text-gray-300 text-xl flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#00DFA2] hover:text-black ${menu.spacing ? "mt-9" : "mt-2"} mt-2  border-b-2`} >
                            <a className="text-2xl block float-left" href={menu.href}>
                            {menu.icon ? menu.icon : <MdSpaceDashboard/>}
                            </a>
                            <a href={menu.href} className={`text-base font-medium flex-1 duration-500 ${!open && "hidden"}`}>{menu.title}</a>
                            {menu.submenu && open && (
                            <MdOutlineArrowDropDownCircle className={`text-gray-300 text-2xl rounded-full border border-gray-300 cursor-pointer hover:bg-[#F6FA70] hover:text-black ${submenuopen && "rotate-180"}`} onClick={() => setSubmenuOpen (!submenuopen)}/>
                            )}
                            {menu.submenu2 && open && (
                            <MdOutlineArrowDropDownCircle className={`text-gray-300 text-2xl rounded-full border border-gray-300 cursor-pointer hover:bg-[#F6FA70] hover:text-black ${submenuopen2 && "rotate-180"}`} onClick={() => setSubmenuOpen2 (!submenuopen2)}/>
                            )}
                        </li>

                        {menu.submenu && submenuopen && open && (
                        <motion.div
                        className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          ease: [0, 0.71, 0.2, 1.01]
                        }}
                        >
                        <ul>
                            {menu.subemnuItems.map((subemnuItem, index) =>(
                                <motion.li 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-[#00DFA2] hover:text-black rounded-md ${menu.spacing ? "mt-5" : "mt-2"} mt-2`}>
                                    <a href={subemnuItem.href} className={`flex-1 duration-500 ${!open && "hidden"}`}>{subemnuItem.title}</a>
                                </motion.li>
                            ))}
                        </ul>  
                        </motion.div>
                        )}
                    {menu.submenu2 && submenuopen2 && open && (
                      <motion.div
                      className="box"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
                      >
                        <ul>
                            {menu.subemnuItems2.map((subemnuItem2, index) =>(
                                <motion.li 
                                whileHover={{ scale: [null, 1.1, 1.1] }}
                                 key={index} href={subemnuItem2.href} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-[#00DFA2] hover:text-black rounded-md ${menu.spacing ? "mt-5" : "mt-2"} mt-2`}>
                                    <a href={subemnuItem2.href} target="_blank" rel="noopener noreferrer" className={`flex-1 duration-500 ${!open && "hidden"}`}>{subemnuItem2.title}</a>
                                </motion.li>
                            ))}
                        </ul>
                        </motion.div>
                        
                    )}
                    </>

                ))}
                
                </ul>
                
                </div>

            </div>
            <div className={`bg-[#0079FF] h-20 flex w-screen duration-500 items-center justify-end z-0`}>
            <Navbar />
            </div>
        </div>
                
    </section>
  );
}

export default Sidebar;
