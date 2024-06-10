import { motion } from "framer-motion";

const Section = (props) => {

  return (
    <section className={` h-screen flex flex-col justify-center  items-center`}>
      <motion.div initial={{ y: 20, opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
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