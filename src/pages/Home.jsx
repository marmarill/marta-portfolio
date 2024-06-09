import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { ScrollControls } from '@react-three/drei'
import Space from '../models/Space'
import { Overlay } from '../models/Overlay'
import config from '../config'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

const Home = () => {

	return (
		<section className="w-full h-screen relative bg-neutral-500 dark:bg-black transition-colors ease-in-out duration-1000">
			<ToastContainer />
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
			<div>
				<Footer />
			</div>
		</section >
	)
}

export default Home