import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import { ScrollControls } from '@react-three/drei'

import HomeInfo from '../components/HomeInfo'
import Space from '../models/Space'
import { Overlay } from '../models/Overlay'
import Carousel from '../models/Carousel'



const Home = () => {



	return (
		<section className="w-full h-screen relative">

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
					<ScrollControls pages={3} damping={0.25} >
						<Space />
						<Overlay />
					</ScrollControls>
				</Canvas>
				{/* <Carousel /> */}
			</Suspense>
		</section >
	)
}

export default Home