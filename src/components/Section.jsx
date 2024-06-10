import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section = (props) => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.20", "0 0.75"],
    layoutEffect: false
  })

  return (
    <section className={` h-screen flex flex-col justify-center  items-center`}>
      <motion.div ref={{ ref }} initial={{ y: 20, opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ opacity: scrollYProgress }}
        className="relative max-h-screen flex items-center justify-center 
        text-[#351212] dark:text-white text-center font-300 ">
        <div className=" max-w-4xl w-full ">
          <div className=" px-8 py-12 bg-slate-300/0 ">
            {props.children}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Section