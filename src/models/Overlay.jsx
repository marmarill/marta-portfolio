import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import { Contact } from "../components/Contacts";


const Section = (props) => {
  return (
    <section className={`h-screen flex flex-col justify-center p-10 items-center " ${props ? "items-end" : "items-start"
      } 
      }`} style={{
        opacity: props.opacity,
      }}>
      <div className=" max-h-screen flex items-center justify-center text-white text-center font-300 ">
        <div className=" max-w-4xl w-full ">
          <div className=" px-8 py-12 bg-slate-300/0">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll()

  const [opacityFirstSection, setOpacityFirstSection] = useState(1)
  const [opacitySecondSection, setOpacitySecondSection] = useState(1)
  const [opacityThirdSection, setOpacityThirdSection] = useState(1)
  const [opacityFourthSection, setOpacityFourthSection] = useState(1)
  const [opacityFifthSection, setOpacityFifthSection] = useState(1)

  useFrame(() => {
    const firstTransitionStart = 0
    const transitionDuration = 1 / 5


    setOpacityFirstSection(1 - scroll.curve(firstTransitionStart, transitionDuration))

    const secondTransitionStart = firstTransitionStart + transitionDuration
    setOpacitySecondSection(scroll.curve(secondTransitionStart, transitionDuration))

    const thirdTransitionStart = secondTransitionStart + transitionDuration
    setOpacityThirdSection(scroll.curve(thirdTransitionStart, transitionDuration))

    const fourthTransitionStart = thirdTransitionStart + transitionDuration
    setOpacityFourthSection(scroll.curve(fourthTransitionStart, transitionDuration))

    const fifthTransitionStart = fourthTransitionStart + transitionDuration
    setOpacityFifthSection(scroll.curve(fifthTransitionStart, transitionDuration))
  })

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold text-5xl mb-10">
            Hello, I'm Marta Marija Ločmele!
          </h1>
          <p className="text-white text-4xl">I am self taught Frontend Developer</p>
        </Section>
        <Section opacity={opacitySecondSection}>
          <h1 className="text-4xl leading-loose">
            Aspiring frontend developer with a passion for creating engaging user experiences. Self-driven and committed to continuous learning, I am on a journey to cultivate my skills and make a meaningful impact in the digital world. Eager to contribute to innovative projects and connect with like-minded professionals in the software development field.
          </h1>
        </Section>
        <Section opacity={opacityThirdSection}>
          <h1 className="leading-loose text-3xl mb-10">
            During my last year at the Latvian Art Academy, I discovered my interest in frontend development and began to teach myself
            the necessary skills. I took digital courses, worked on various projects, and learned a lot along the way.
            I’m always looking to improve and learn more about frontend development.
          </h1>
        </Section>
        <Section opacity={opacityFourthSection}>
          <h1 className="leading-loose text-3xl mb-10">
            Recently, I built a portfolio website
            for a graphic designer, which was a valuable experience and reinforced my commitment to becoming a better frontend developer. For this project i used technologies such as React.js, HTML, Javascript and CSS. You can visit the website <a href="https://elizabetebusevica.com/" target="_blank" className="underline">here</a>
          </h1>
        </Section>
        <Section opacity={opacityFifthSection}>
          <h1 className="leading-loose text-3xl mb-10">
            <Contact />
          </h1>
        </Section>
      </div>
    </Scroll>
  );
};