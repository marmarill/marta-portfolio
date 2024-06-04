import { useRef } from "react";
import { Contact } from "../components/Contacts";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scroll } from "@react-three/drei"

import { Link } from "react-router-dom";
import Circle from "../components/SkillSection";
import SkillSection from "../components/SkillSection";

// TODO: move to another file
const Section = (props) => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.25", "0 0.75"],
    layoutEffect: false
  })

  return (
    <section className={` h-screen flex flex-col justify-center p-10 items-center`}>
      <motion.div ref={{ ref }} initial={{ y: 20, opacity: 0 }}
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

export const Overlay = () => {
  return (
    <Scroll html>
      <div className="w-screen">

        <Section >
          <div>
            <h1 className="font-semibold text-5xl mb-10">
              Hello, I'm Marta Marija Ločmele!
            </h1>
            <p className="text-white text-4xl">I am a self taught Frontend Developer</p>
          </div>
        </Section>
        <Section>
          <h1 className="leading-loose text-3xl mb-10">
            Aspiring frontend developer with a passion for creating engaging user experiences. Self-driven and committed to continuous learning, I am on a journey to cultivate my skills and make a meaningful impact in the digital world. Eager to contribute to innovative projects and connect with like-minded professionals in the software development field.
          </h1>
        </Section>
        <Section>
          <h1 className="leading-loose text-3xl mb-10">
            During my last year at the Latvian Art Academy, I discovered my interest in frontend development and began to teach myself
            the necessary skills. I took digital courses, worked on various projects, and learned a lot along the way.
            I’m always looking to improve and learn more about frontend development.
          </h1>
        </Section>
        <Section>
          <h1 className="leading-loose text-3xl mb-10">
            Recently, I built a portfolio website
            for a graphic designer, which was a valuable experience and reinforced my commitment to becoming a better frontend developer.
            For this project I used technologies such as React.js, HTML, Javascript and CSS. You can visit the website <a href="https://elizabetebusevica.com/" target="_blank" className="underline">here</a>
          </h1>
        </Section>
        <Section>
          <h1 className="leading-loose text-3xl mb-10">
            Aside from that, I have been actively involved in a web-based game project called <a href="https://morby.lyricblaster.com/"> Lyricblaster</a>. I have been working closely with the owner of the project, gaining valuable experience and knowledge.
            So far, I have successfully created several components for the project that aid the functionality of the game.
          </h1>
        </Section>
        <Section>
          <h1 className="leading-loose text-3xl mb-10">
            My skillset
          </h1>
          <SkillSection />
        </Section>
        <Section>
          {/* TODO: fix this - why is it in the h1?  */}
          <h1 className="leading-loose text-3xl mb-10">
            <Contact />
          </h1>
        </Section>
      </div>
    </Scroll>

  );
};

export const Heading = ({ children }) => <h1 className="leading-loose text-3xl mb-10">
  {children}
</h1>
