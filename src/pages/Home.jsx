import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import { ScrollControls } from '@react-three/drei'

import HomeInfo from '../components/HomeInfo'
import Space from '../models/Space'


const Home = () => {

	const [currentStage, setCurrentStage] = useState(1)

	return (
		<section className="w-full h-screen relative">
			<div className="absolute top-28 left-0 right-0 z-20 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Suspense fallback={<Loader />}>
				<Canvas
					className={`w-full h-screen`}
					camera={{
						fov: 70,
						near: 0.1,
						far: 1000,
						position: [1, 4, 12],
					}}
				>
					<color attach="background" args={["black"]} />
					<ScrollControls pages={4} damping={0.25} >
						<Space setCurrentStage={setCurrentStage} />
					</ScrollControls>
				</Canvas>
			</Suspense>
		</section >
	)
}

export default Home