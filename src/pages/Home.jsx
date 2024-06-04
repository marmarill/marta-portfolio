import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { ScrollControls } from '@react-three/drei'
import HomeInfo from '../components/HomeInfo'
import Space from '../models/Space'
import { Overlay } from '../models/Overlay'
import config from '../config'

const Home = () => {
	return (
		<section className="w-full h-screen relative">
			<Suspense fallback={<Loader />}>
				<Canvas
					className={`w-full h-screen`}
					camera={config.camera}
				>
					<ScrollControls
						pages={config.scrollControls.pages}
						damping={config.scrollControls.damping}
					>
						<Space />
						<Overlay />
					</ScrollControls>
				</Canvas>
			</Suspense>
		</section >
	)
}

export default Home