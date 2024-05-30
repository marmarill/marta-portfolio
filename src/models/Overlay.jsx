import { useRef } from "react";
import { Contact } from "../components/Contacts";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scroll } from "@react-three/drei"
import Carousel from "./Carousel";


const Section = (props) => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.25", "0 0.75"],
    // offset: ["start start", "end start"],
    layoutEffect: false
  })

  return (
    <section className={` h-screen flex flex-col justify-center p-10 items-center`}>
      <motion.div ref={{ ref }} initial={{ y: 20, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // exit={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.9 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px" }}
        style={{ opacity: scrollYProgress }} className="relative max-h-screen flex items-center justify-center text-white text-center font-300 ">
        <div className=" max-w-4xl w-full ">
          <div className=" px-8 py-12 bg-slate-300/0">
            {props.children}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// const SectionHorizontal = (props) => {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     // offset: ["0 0.25", "0 0.75"],
//     offset: ["start start", "end start"],
//     layoutEffect: false
//   })
//   const xTransform = useTransform(scrollYProgress, [0, 1], [0, 500])

//   return (
//     <section className={` h-screen flex flex-col justify-center p-10 items-center`}>
//       <motion.div ref={{ ref }} initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         // exit={{ y: 100, opacity: 0 }}
//         transition={{ ease: 'easeInOut', duration: 0.7 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ margin: "-200px" }}
//         style={{ x: xTransform }}
//         className="relative max-h-screen flex items-center justify-center text-white text-center font-300 ">
//         <div className=" max-w-4xl w-full ">
//           <div className=" px-8 py-12 bg-slate-300/0">
//             {props.children}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }



export const Overlay = () => {


  return (
    <Scroll html>
      <div className="w-screen">

        <Section >
          <div>
            <h1 className="font-semibold text-5xl mb-10">
              Hello, I'm Marta Marija Ločmele!
            </h1>
            <p className="text-white text-4xl">I am self taught Frontend Developer</p>
          </div>
        </Section>
        <Section >
          <div>
            <h1 className="text-4xl leading-loose">
              Aspiring frontend developer with a passion for creating engaging user experiences.
            </h1>
          </div>
        </Section>
        <Section>
          <h1 className="leading-loose text-3xl mb-10">
            During my last year at the Latvian Art Academy, I discovered my interest in frontend development and began to teach myself
            the necessary skills.
          </h1>
        </Section>
        <Section >
          <h1 className="leading-loose text-3xl mb-10">
            Recently, I built a portfolio website
            for a graphic designer
          </h1>
        </Section>
        <Section >
          <h1 className="leading-loose text-3xl mb-10">
            <Contact />
          </h1>
        </Section>
      </div>
    </Scroll>

  );
};