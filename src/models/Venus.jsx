import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import venusScene from '../assets/3d/venus_de_milo.glb'
import { OrbitControls, ScrollControls, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Venus = ({ position, props }) => {
  const { scene } = useGLTF(venusScene)
  const meshRef = useRef()
  const scroll = useScroll()

  const scrollPoints = [0, 0.25, 0.5] // 25%, 50%, 75% scroll positions
  const rotations = [0, Math.PI / 2, Math.PI] // Rotations at each point
  const positions = [-6, -2, 0] // Positions at each point

  useFrame(() => {
    const scrollPosition = scroll.scroll.current

    // Interpolate rotation based on scroll position
    let rotation = 0
    let yPosition = 0

    if (scrollPosition < scrollPoints[1]) {
      rotation = gsap.utils.interpolate(
        rotations[0],
        rotations[1],
        scrollPosition / scrollPoints[1]
      )
      yPosition = gsap.utils.interpolate(
        positions[0],
        positions[1],
        scrollPosition / scrollPoints[1]
      )
    } else if (scrollPosition < scrollPoints[2]) {
      rotation = gsap.utils.interpolate(
        rotations[1],
        rotations[2],
        (scrollPosition - scrollPoints[1]) / (scrollPoints[2] - scrollPoints[1])
      )
      yPosition = gsap.utils.interpolate(
        positions[1],
        positions[2],
        (scrollPosition - scrollPoints[1]) / (scrollPoints[2] - scrollPoints[1])
      )
    } else {
      rotation = gsap.utils.interpolate(
        rotations[2],
        rotations[2],
        (scrollPosition - scrollPoints[2]) / (1 - scrollPoints[2])
      )
      yPosition = gsap.utils.interpolate(
        positions[2],
        positions[2],
        (scrollPosition - scrollPoints[2]) / (1 - scrollPoints[2])
      )
    }

    if (meshRef.current) {
      meshRef.current.rotation.y = rotation
      meshRef.current.position.y = yPosition
    }
  })


  return (
    <>
      {/* <OrbitControls enableZoom={false} enableRotate={false} /> */}
      <mesh position={position} ref={meshRef} rotation={[0, 5, 0]}>
        <primitive object={scene} scale={26} />
      </mesh>
    </>

  )
}

export default Venus