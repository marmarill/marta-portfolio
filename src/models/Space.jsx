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
  useEffect(() => {
    const rotation = groupRef.current.rotation.y
    const normalizedRotation = ((rotation % fullRotation) + fullRotation) % fullRotation

    console.log('normalizedRotation', normalizedRotation)

    switch (true) {
      case normalizedRotation >= 0.25 && normalizedRotation <= 1:
        setCurrentStage(4)
        break
      case normalizedRotation >= 0.85 && normalizedRotation <= 0.3:
        setCurrentStage(3)
        break
      case normalizedRotation >= 0.4 && normalizedRotation <= 0.6:
        setCurrentStage(2)
        break
      case normalizedRotation >= 0.5 && normalizedRotation <= 0.8:
        setCurrentStage(1)
        break
      default:
        setCurrentStage(null)
    }
  }, [scroll.offset])

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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
      </group>
    </a.group>
  )
}
export default Space