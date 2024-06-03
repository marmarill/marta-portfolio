import React from 'react'
import Carousel from '../models/Carousel'

const About = () => {
  return (
    <div>
      <Carousel />
      <div className={` h-screen flex flex-col justify-center p-10 items-center`}>
        <h1 className="leading-loose text-3xl mb-10">
          My projects
        </h1>
        <p className="leading-loose text-3xl mb-10">
          Scroll down
        </p>
        <p className="leading-loose text-3xl mb-10">
          ` Recently, I built a portfolio website
          for a graphic designer, which was a valuable experience and reinforced my commitment to becoming a better frontend developer. For this project i used technologies such as React.js, HTML, Javascript and CSS. You can visit the website <a href="https://elizabetebusevica.com/" target="_blank" className="underline">here</a>`
        </p>
      </div>

    </div>
  )
}

export default About