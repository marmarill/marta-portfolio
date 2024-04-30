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
        {/* <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group> */}
        {/* <group position={[-357.404, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group> */}
        {/* <group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials['Material.002']}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        /> */}
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
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials['Material.001']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials['Material.002']}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials['Material.002']}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        /> */}
      </group>
    </a.group>
  )
}
export default Space