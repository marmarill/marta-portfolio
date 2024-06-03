import { useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"



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

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"])

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} initial={{ y: 20 }}
          transition={{ ease: 'easeInOut', duration: 0.9 }}
          className="flex gap-[458px]">
          {parts.map((part) => {
            return <Part part={part} key={part.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

const Part = ({ part }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "0px 200px 0px 200px"
  })
  return (
    <motion.div
      className="relative h-[450px] w-[36rem] overflow-hidden text-center">
      <motion.p className="absolute text-4xl bg-transparent text-white inset-0 z-0 transition-transform duration-300 self-center"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          amount: 0.5
        }}
      >
        {part.text}
      </motion.p>
    </motion.div>
  )
}

export default Carousel

const parts = [
  {
    text: ` During my last year at the Latvian Art Academy, I discovered my interest in frontend development and began to teach myself
    the necessary skills.`,
    id: 1,
  },
  {
    text: `I took digital courses, worked on various projects, and learned a lot along the way.
    `,
    id: 2,
  },
  {
    text: `I’m always looking to improve and learn more about frontend development.`,
    id: 3,
  }
];