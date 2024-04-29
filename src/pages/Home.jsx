import { Suspense, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import Loader from '../components/Loader'

import { ScrollControls, Environment, useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import Rollion from '../models/Rollion'



const Home = () => {
	const [isRotating, setIsRotating] = useState(false)
	const [currentStage, setCurrentStage] = useState(1)

	const adjustIslandForScreenSize = () => {
		let screenScale = null
		let screenPosition = [0, -6.5, -43]
		let rotation = [0.1, 4.7, 0]

		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9]
			screenPosition = [0, -6.5, -43]
		} else {
			screenScale = [1, 1, 1]
		}
		return [screenScale, screenPosition, rotation]
	}

	const adjustPlaneForScreenSize = () => {
		let screenScale, screenPosition

		if (window.innerWidth < 768) {
			screenScale = [1.5, 1.5, 1.5]
			screenPosition = [0, -1.5, 0]
		} else {
			screenScale = [3, 3, 3]
			screenPosition = [0, -4, -4]
		}
		return [screenScale, screenPosition]
	}
	const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
	const [planeScale, planePosition] = adjustPlaneForScreenSize()

	const gltf = useLoader(GLTFLoader, './src/assets/3d/rollion.glb')
	return (
		<section className="w-full h-screen relative">
			<div className="absolute top-28 left-0 right-0 z-20 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Suspense fallback={<Loader />}>
				<Canvas
					className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
					camera={{
						fov: 70, // Narrowing the FOV to bring the object closer
						near: 0.1, // Allowing for closer near clipping
						far: 100, // Extending the far clipping plane
						position: [1, 1, 2],
					}}

				>
					{/* <axesHelper args={[5]} /> */}
					{/* <gridHelper args={[10, 10]} /> */}

					<directionalLight position={[1, 10, 1]} intensity={3} />
					<ambientLight intensity={5} />
					<hemisphereLight skyColor="#000000" groundColor="#000000" intensity={1} />
					{/* <pointLight /> */}
					{/* <spotLight /> */}
					{/* <Bird /> */}
					{/* <Sky */}
					{/* isRotating={isRotating} */}
					{/* /> */}
					<Environment preset="sunset" background blur={500} />
					<ScrollControls pages={4} damping={0.25}>
						{/* <Venus position={[0, 0, 0]} /> */}
						<Rollion object={gltf.scene} position={[0, 1, 0]} />
					</ScrollControls>
				</Canvas>
			</Suspense>
		</section >
	)
}

export default Home