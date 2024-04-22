import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import { adjustIslandForScreenSize, adjustPlaneForScreenSize } from './helper'

const Home = () => {
	const [isRotating, setIsRotating] = useState(false)
	const [currentStage, setCurrentStage] = useState(1)
	const [isSpeedingUp, setIsSpeedingUp] = useState(false)
	const [adjustedPlanePosition] = adjustPlaneForScreenSize()
	const [planePosition, setPlanePosition] = useState(adjustedPlanePosition || [0, -1, 0])

	const enterSecondStage = () => {
		console.log(enterSecondStage)
		setIsSpeedingUp(false)
	}

	return (
		<section className="w-full h-screen relative">
			<div className="absolute top-28 left-5 right-0 z-10 flex items-center justify-center">
				<div>
					{currentStage && <HomeInfo currentStage={currentStage} />}
					<div className="mt-6 flex items-center justify-end">
						<button className="neo-brutalism-white p-2 mr-4" onClick={(() => setIsSpeedingUp(true))}>Okay, so what?</button>
					</div>
				</div>
			</div>
			<Suspense fallback={<Loader />}>
				<Canvas
					className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
					camera={{ near: 0.1, far: 1000 }}
				>
					<directionalLight position={[1, 10, 1]} intensity={3} />
					<ambientLight intensity={0.5} />
					<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
					{/* <pointLight /> */}
					{/* <spotLight /> */}
					{/* <Bird /> */}
					<Sky
						isRotating={true}
					/>
					<Plane
						isSpeedingUp={isSpeedingUp}
						enterSecondStage={enterSecondStage}
						position={planePosition}
						setPosition={setPlanePosition}
					/>
				</Canvas>
			</Suspense>
		</section>
	)
}

export default Home