import { Contact } from "../components/Contacts";
import { Scroll } from "@react-three/drei"
import SkillSection from "../components/SkillSection";
import Section from "../components/Section";

const commonStyles = 'transition-all duration-300'


export const Overlay = () => {

  return (
    <Scroll html>
      <div className="w-screen">
        <Section >
          <div>
            <h1 className={`font-semibold text-5xl mb-10  max-sm:text-2xl ${commonStyles}`}>
              Hello, I'm Marta Marija Ločmele!
            </h1>
            <p className={`text-4xl  max-sm:text-xl ${commonStyles}`}>I am a self taught Frontend Developer</p>
          </div>
        </Section>
        <Section>
          <Text>
            Aspiring frontend developer with a passion for creating engaging user experiences. Self-driven and committed to continuous learning, I am on a journey to cultivate my skills and make a meaningful impact in the digital world. Eager to contribute to innovative projects and connect with like-minded professionals in the software development field.
          </Text>
        </Section>
        <Section>
          <Text>
            During the final year of doing my Bachelor’s degree at the Art Academy of Latvia,
            I discovered an interest in connecting art with aesthetic digital solutions, which lead me to begin exploring the world of programming.
          </Text>
        </Section>
        <Section>
          <Text>
            I focused on frontend development and began to teach myself the skills necessary for creating innovative and accessible webpages that provide a seamless user experience.
            I took digital courses, worked on different projects, and learned a lot along the way.
            I’m always looking to improve and learn more about frontend development.
          </Text>
        </Section>
        <Section>
          <Text>
            Recently, I built a portfolio website
            for a graphic designer, which was a valuable experience and reinforced my commitment to becoming a better frontend developer.
            For this project I used technologies such as React.js, HTML, Javascript and CSS. You can visit the website <a href="https://elizabetebusevica.com/" target="_blank" className="underline">here</a>
          </Text>
        </Section>
        <Section>
          <Text>
            Aside from that, I have been actively involved in a web-based game project called <a href="https://www.facebook.com/LyricBlasterAlpha" target="_blank" className="underline"> Lyricblaster</a>. I have been working closely with the owner of the project, gaining valuable experience and knowledge.
            So far, I have successfully created several components for the project that aid the functionality of the game.
          </Text>
        </Section>
        <Section>
          <Text>
            My Skillset
          </Text>
          <SkillSection />
        </Section>
        <Section>
          <Text>
            If you're interested in seeing the code for this and other projects, check out my GitHub profile! <br />
            <a href="https://github.com/marmarill" target="_blank" className="underline"> Click here</a>
          </Text>
        </Section>
        <Section>
          <Contact />
        </Section>
      </div>
    </Scroll>

  )
}

export const Text = ({ children }) => <h1 className={`leading-loose text-3xl mb-10 max-sm:text-xl ${commonStyles}`}>
  {children}
</h1>
