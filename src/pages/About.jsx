import React from 'react'

const About = () => {
  return (
    <div>
      <div className={` h-screen flex flex-col justify-center p-10 items-center`}>
        <h1 className="leading-loose text-3xl mb-10">
          My projects
        </h1>
        <p className="text-white leading-loose text-3xl mb-10 w-[36rem] h-screen text-center">
          Recently, I built a portfolio website
          for a graphic designer.
          Which was a valuable experience and reinforced my commitment to becoming a better frontend developer.
          For this project i used technologies such as React.js, HTML, Javascript and CSS.
          <br />
          You can visit the website <a href="https://elizabetebusevica.com/" target="_blank" className="underline">here</a>
        </p>
        <p className="text-white leading-loose text-3xl mb-10 w-[36rem] text-center">
          Recently, I built a portfolio website
          for a graphic designer.
          Which was a valuable experience and reinforced my commitment to becoming a better frontend developer.
          For this project i used technologies such as React.js, HTML, Javascript and CSS.
          <br />
          You can visit the website <a href="https://elizabetebusevica.com/" target="_blank" className="underline">here</a>
        </p>
      </div>

    </div>
  )
}

export default About