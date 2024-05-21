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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
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
      className="group relative h-[450px] w-[450px] overflow-hidden"
    >
      <p className="absolute bg-white inset-0 z-0 transition-transform duration-300 ">
        {part.text}
      </p>
    </div>
  );
};

export default Carousel

const parts = [
  {
    text: "text 1",
    id: 1,
  },
  {
    text: "text 2",
    id: 2,
  },
  {
    text: "text 3",
    id: 3,
  },
  {

    text: "text 4",
    id: 4,
  },
  {

    text: "text 5",
    id: 5,
  },
  {

    text: "text 6",
    id: 6,
  },
  {

    text: "text 7",
    id: 7,
  },
];