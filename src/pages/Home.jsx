import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import { ScrollControls } from '@react-three/drei'

import HomeInfo from '../components/HomeInfo'
import Space from '../models/Space'





const Home = () => {
	const [isRotating] = useState(false)
	const [currentStage, setCurrentStage] = useState(1)

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			if (scrollY >= 0 && scrollY < 500) {
				setCurrentStage(1);
			} else if (scrollY >= 500 && scrollY < 1000) {
				setCurrentStage(2);
			} else if (scrollY >= 1000 && scrollY < 1500) {
				setCurrentStage(3);
			} else {
				setCurrentStage(4);
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<section className="w-full h-screen relative">
			<div className="absolute top-28 left-0 right-0 z-20 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Suspense fallback={<Loader />}>
				<Canvas
					className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
					camera={{
						fov: 70,
						near: 0.1,
						far: 1000,
						position: [1, 3, 12],
					}}

				>
					<axesHelper args={[5]} />
					<gridHelper args={[10, 10]} />

					<directionalLight position={[1, 10, 1]} intensity={3} />
					<ambientLight intensity={0.1} />
					<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
					{/* <pointLight /> */}
					{/* <spotLight /> */}
					{/* <Bird /> */}
					{/* <Sky */}
					{/* isRotating={isRotating} */}
					{/* /> */}
					<ScrollControls pages={4} damping={0.25}>
						<Space position={[0, 0, 0]} />
					</ScrollControls>
				</Canvas>
			</Suspense>
		</section >
	)
}

export default Home