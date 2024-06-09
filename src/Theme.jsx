'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { HiOutlineLightBulb, HiLightBulb } from 'react-icons/hi'


const Theme = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])
  return (
    <div
      className='w-16 h-16 cursor-pointer flex items-center justify-center'
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <HiLightBulb className='text-white w-10 h-10 animate-bounce' />
      ) : (
        <HiOutlineLightBulb className='text-[#2b1111] w-10 h-10 animate-bounce' />
      )}
    </div>
  )
}

export default Theme