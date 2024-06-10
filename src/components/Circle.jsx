import { motion, useInView } from "framer-motion"
import React, { useRef } from "react"

const Circle = ({ fillAmount }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 })

  return (
    <div ref={ref} className="relative flex items-center justify-center h-10 w-10 max-sm:w-6 max-sm:h-6" style={{
      transform: 'rotate(90deg)'
    }}>
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          stroke="#ccc"
          className={'stroke-[#908b8b] dark:stroke-[#ccc] transition-all ease-linear duration-300'}
          strokeWidth="20%"
          fill="none"
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="40%"
          className={'stroke-[#351212] dark:stroke-[#d10300] transition-all ease-linear duration-300'}
          strokeWidth="20%"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? fillAmount : 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}

export default Circle