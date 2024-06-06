import Circle from "./Circle"


const SkillSection = () => {

  const skills = [
    { name: "HTML", level: 0.60 },
    { name: "CSS", level: 0.70 },
    { name: "JavaScript", level: 0.40 },
    { name: "React.js", level: 0.30 },
    { name: "Node.js", level: 0.30 },
    { name: "Next.js", level: 0.20 },
  ]

  return (
    <div className=" max-w-4xl w-full grid grid-cols-2 gap-10 justify-center max-sm:gap-4 max-sm:grid-cols-1 ">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-row self-center justify-between">
          <p className="text-4xl text-white mr-4 max-sm:text-xl">{skill.name}</p>
          <Circle fillAmount={skill.level} />
        </div>
      ))}
    </div>
  )
}

export default SkillSection