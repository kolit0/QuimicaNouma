import React from 'react';
import { useTranslation } from "react-i18next";
import { useInView } from 'framer-motion';
import { useRef} from "react";

function Productos () {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [t] = useTranslation("global");
  return (
    <section className='w-full h-auto bg-white'>
        <div className='md:flex md:flex-row grid grid-cols-1 justify-around p-5 gap-5'>
            <div className='w-auto h-auto flex flex-col p-5 gap-3 content-center items-center bg-gray-200 text-center'
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transitionDelay: isInView ? "1s" : "0s",
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} ref={ref}>
                <h2 className='md:text-4xl text-2xl text-black font-semibold'>{t("products.section1")}</h2>
                <a href={"../Products/Industry"} className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md       group-hover:bg-opacity-0 md:text-2xl font-semibold">
                    {t("products.btn")}
                    </span>
                </a>
            </div>
            <div className='w-auto h-auto flex flex-col p-5 gap-3 content-center items-center bg-gray-200 text-center'
            style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: isInView ? "1s" : "0s"
                }} ref={ref}>
                <h2 className='md:text-4xl text-2xl text-black font-semibold'>{t("products.section2")}</h2>
                <a href={"../Products/Cleaning"} className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md       group-hover:bg-opacity-0 md:text-2xl font-semibold">
                    {t("products.btn")}
                    </span>
                </a>
            </div>
        </div>
        <div className='md:flex md:flex-row grid grid-cols-1 justify-around p-5 gap-5'>
        <div className='w-auto h-auto flex flex-col p-5 gap-3 content-center items-center bg-gray-200 text-center'
        style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transitionDelay: isInView ? "1.2s" : "0s",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }} ref={ref}>
                <h2 className='md:text-4xl text-2xl text-black font-semibold'>{t("products.section3")}</h2>
                <a href={"../Products/Cosmetics"} className=" inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md       group-hover:bg-opacity-0 md:text-2xl font-semibold">
                    {t("products.btn")}
                    </span>
                </a>
            </div>
        <div className='w-auto h-auto flex flex-col p-5 gap-3 content-center items-center bg-gray-200 text-center'
        style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            transitionDelay: isInView ? "1.2s" : "0s"
            }} ref={ref}>
                <h2 className='md:text-4xl text-2xl text-black font-semibold'>{t("products.section4")}</h2>
                <a href={"../Products/Food"} className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md       group-hover:bg-opacity-0 md:text-2xl font-semibold">
                    {t("products.btn")}
                    </span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default function ProductosContenido() {
    return (
      <>
        <Productos></Productos>
      </>
    );
  }