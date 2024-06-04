import Circle from "./Circle"


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