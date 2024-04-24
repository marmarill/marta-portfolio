import React from 'react'

import venusScene from '../assets/3d/venus_de_milo.glb'
import { useGLTF } from '@react-three/drei'


const Venus = ({ position }) => {

  const { scene } = useGLTF(venusScene)

  return (
    <mesh position={position}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Venus