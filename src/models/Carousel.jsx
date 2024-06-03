import { useRef } from "react";
import { Contact } from "../components/Contacts";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scroll } from "@react-three/drei"




const Carousel = () => {
  return (
    <HorizontalScrollCarousel />
  )
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-100%"])

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-80 ">
          {parts.map((part) => {
            return <Part part={part} key={part.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

const Part = ({ part }) => {
  return (
    <div
      key={part.id}
      className=" relative h-[450px] w-96 overflow-hidden p-10"
    >
      <p className="absolute text-2xl bg-transparent text-white inset-0 z-0 transition-transform duration-300 ">
        {part.text}
      </p>
    </div>
  );
};

export default Carousel

const parts = [
  {
    text: ` During my last year at the Latvian Art Academy, I discovered my interest in frontend development and began to teach myself
    the necessary skills.`,
    id: 1,
  },
  {
    text: `I took digital courses, worked on various projects, and learned a lot along the way.
    I’m always looking to improve and learn more about frontend development.`,
    id: 2,
  },
  {
    text: ` Recently, I built a portfolio website
    for a graphic designer, which was a valuable experience and reinforced my commitment to becoming a better frontend developer. For this project i used technologies such as React.js, HTML, Javascript and CSS. You can visit the website <a href="https://elizabetebusevica.com/" target="_blank" className="underline">here</a>`,
    id: 3,
  }
];