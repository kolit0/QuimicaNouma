import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineProduct} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdSpaceDashboard, MdOutlineWebAsset, MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { RiContactsBook3Line } from "react-icons/ri";
import noumaIco from "../FavIcon/favicon.ico";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import nouma from "../Imagenes/quimicaNOUMA.png"

const Sidebar = ()=>{
  const [open, setOpen] = useState(true);
  const [submenuopen, setSubmenuOpen] = useState(false);
  const [submenuopen2, setSubmenuOpen2] = useState(false);
  const Menus = [
    { title: "Inicio", icon: <FiHome />},
    { title: "Paginas", 
      icon: <MdOutlineWebAsset />,
      submenu2: true,
      subemnuItems2: [
        {title: "Grupo Nouma"},
        {title: "Nouma Trading & Logistics"},
        {title: "Vencatalyst"},
      ],
    },
    { title: "Productos", 
      icon: <AiOutlineProduct />,
      spacing: true,
      submenu: true,
      subemnuItems: [
        { title: "Submenu 1"},
        { title: "Submenu 2"},
        { title: "Submenu 3"},
        { title: "Submenu 4"},
        { title: "Submenu 5"},
      ],
    },
    { title: "Contactanos", icon: <RiContactsBook3Line />},
  ];
  return (
    <section className="sticky top-0 flex-row">
        <div className="flex">
            <div className={`bg-blue-500 h-screen ${open ? "md:w-72 w-60 md:opacity-100 opacity-95" : "w-20"} duration-500 absolute z-10`}>
                <BsArrowLeftShort className={`bg-white text-blue-500 text-3xl rounded-full absolute -right-10 top-9 border border-blue-500 cursor-pointer -mt-2 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>

                <div className={` bg-white ${!open ? "w-[5rem] items-center inline-flex  h-20 px-4": "md:px-16 pl-8"} ${!open ? " py-4 pb-0 duration-500": ""}`}>
                  {!open ? <motion.img id="NoumaIco" src={noumaIco} className={`size-10 cursor-pointer block float-left mr-2 duration-500`}
                   alt="Nouma Icono"
                   /> : <motion.img alt="Nouma Logo" src={nouma} className='block h-auto w-40 cursor-pointer mr-2 duration-500'
                  />}
                </div>
                <div className=" p-5 pt-1">
                <div className={`flex items-center rounded-md bg-slate-600 mt-6 ${!open ? "px-2.5": "px-4"} px-2 py-2`}>
                    <FaSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}/>
                    <input type={"search"} placeholder="Buscar" className={`px-1 text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}/>
                </div>

                <ul className="pt-2">
                {Menus.map((menu, index) =>(
                    <>
                        <li key={index} className={`text-gray-300 text-xl flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-600 duration-200 ease-in-out ${menu.spacing ? "mt-9" : "mt-2"} mt-2  border-b-2`} >
                            <span className="text-2xl block float-left">
                            {menu.icon ? menu.icon : <MdSpaceDashboard/>}
                            </span>
                            <span className={`text=base font-medium flex-1 duration-500 ${!open && "hidden"}`}>{menu.title}</span>
                            {menu.submenu && open && (
                            <MdOutlineArrowDropDownCircle className={`text-gray-300 text-2xl rounded-full border border-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 ${submenuopen && "rotate-180"}`} onClick={() => setSubmenuOpen (!submenuopen)}/>
                            )}
                            {menu.submenu2 && open && (
                            <MdOutlineArrowDropDownCircle className={`text-gray-300 text-2xl rounded-full border border-gray-300 cursor-pointer hover:bg-gray-300 hover:text-blue-500 ${submenuopen2 && "rotate-180"}`} onClick={() => setSubmenuOpen2 (!submenuopen2)}/>
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
                                whileHover={{ scale: [null, 1.1, 1] }}
                                key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-600 rounded-md ${menu.spacing ? "mt-5" : "mt-2"} mt-2`}>
                                {subemnuItem.title}
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
                                whileHover={{ scale: [null, 1.1, 1] }}
                                 key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-600 rounded-md ${menu.spacing ? "mt-5" : "mt-2"} mt-2`}>
                                {subemnuItem2.title}
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
            <div className={`bg-blue-500 h-20 flex w-screen duration-500 items-center justify-end z-0`}>
            <Navbar />
            </div>
        </div>
                
    </section>
  );
}

export default Sidebar;
