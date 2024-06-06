import React, { useEffect } from 'react'

const Loader = () => {

  useEffect(() => {
    console.log('LOADER STARTED')
    return () => {
      console.log('LOADER UNMOUNT')
    }
  }, [])
  return (
    <div className="flex justify-center items-center bg-black h-full w-full">
      <div className="w-20 h-20 border-opacity-20 border-blue-500 border-t-blue-500 rounder-full animate-spin">
      </div>
    </div>
  )
}

export default Loader