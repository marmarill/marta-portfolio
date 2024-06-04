import React, { useRef, useEffect } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { a } from '@react-spring/three'
import spaceScene from '../assets/3d/space.glb'
import { useFrame } from '@react-three/fiber'



const Space = ({ setCurrentStage, ...props }) => {
  const { nodes, materials } = useGLTF(spaceScene)
  const scroll = useScroll()

  const groupRef = useRef()
  const fullRotation = 2 * Math.PI

  useFrame(() => {
    const rotationAngle = scroll.offset * fullRotation
    groupRef.current.rotation.y = rotationAngle

  })
  console.log('scroll offset', scroll.offset)


  return (

    <a.group ref={groupRef} {...props} dispose={null} position={[0, -1, 4]}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.particles_Material002_0.geometry}
          material={materials['Material.002']}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.particles_Material002_0.geometry}
          material={materials['Material.002']}
          position={[489.69, 320.811, 355.293]}
          rotation={[-Math.PI / 2.5, 0, -Math.PI / 2]}
          scale={20.408}
        />

      </group>
    </a.group>
  )
}
export default Space