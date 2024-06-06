'use client'
import React from 'react'
import { useEffect, useState } from 'react'


const Theme = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  },[darkMode])
  return (
    <div 
    className='w-8 h-8 dark:bg-white bg-lime-500 
    cursor-pointer'
    onClick={() => setDarkMode(!darkMode)}
    >
     <p className='text-white'>bleebloop</p>
     <div w-8 h-8 dark:bg-lime-500 bg-white >
      <p>fhfohe</p>
     </div>
    </div>
  )
}

export default Theme