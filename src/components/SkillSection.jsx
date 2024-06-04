import React, { useRef } from "react"
import { motion, transform, useInView } from "framer-motion"

const Circle = ({ fillAmount }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 })

  return (
    <div ref={ref} className="relative flex items-center justify-center h-10 w-10" style={{
      transform: 'rotate(90deg)'
    }}>
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="40%"
          stroke="#ccc"
          strokeWidth="20%"
          fill="none"
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="40%"
          stroke="#ff0055"
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

const SkillSection = () => {

  const skills = [
    { name: "HTML", level: 0.80 },
    { name: "CSS", level: 0.60 },
    { name: "JavaScript", level: 0.50 },
    { name: "React.js", level: 0.35 },
    { name: "Node.js", level: 0.30 },
    { name: "Next.js", level: 0.30 },
  ]

  return (
    <div className=" max-w-4xl w-full grid grid-cols-2 gap-10 items-center justify-center">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-row items-center mb-4 justify-between">
          <p className="text-4xl text-white mr-4">{skill.name}</p>
          <Circle fillAmount={skill.level} />
        </div>
      ))}
    </div>
  )
}

export default SkillSection