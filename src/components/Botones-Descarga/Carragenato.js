import React from 'react';
import pdf from "../../Hojas de Seguridad/HS CARRAGENATO.pdf";
import { useTranslation } from 'react-i18next';
import { useRef } from "react";
import { useInView } from "framer-motion";

const Download = () => {
  const [t] = useTranslation("global");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className='h-auto w-auto flex'
    style={{
      transform: isInView ? "none" : "translateY(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }} ref={ref}>
        <button className="text-black px-6 py-2 bg-[#00c08d] rounded-xl hover:bg-[#F6FA70] hover:text-black font-semibold duration-300 ease-in-out mx-2 flex">
            <a download={pdf} href={pdf}>{t("download.btn")}</a>
        </button>
    </div>
  )
}

export default Download