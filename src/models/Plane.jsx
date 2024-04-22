import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isSpeedingUp, enterSecondStage, position, setPosition }) => {
	const ref = useRef()
	const { scene, animations } = useGLTF(planeScene)
	const { actions } = useAnimations(animations, ref)

	useFrame(({ clock }) => {
		ref.current.position.y = Math.sin(clock.elapsedTime) * 0.7 * position[1] - 1.5

		if (isSpeedingUp) {
			console.log(isSpeedingUp)
			ref.current.position.x += 0.2;
			(async () => {
				await new Promise(r => setTimeout(r, 2000));
				enterSecondStage()
			})()
		}

		// const elapsedSine = clock.getElapsedTime()
		// console.log(parseInt(ref.current.position.y))
		// if (isRising) {
		// 	ref.current.position.y += clock.getElapsedTime()
		// 	ref.current.position.y > 0 ? setIsRising(false) : null
		// }

		// if (!isRising) {
		// 	ref.current.position.y -= clock.getElapsedTime()
		// 	ref.current.position.y < -1 ? setIsRising(true) : null
		// }
	})

	useEffect(() => {
		actions['Take 001'].play()
	}, [actions])

	return (
		<mesh rotation={[0, 20, 0]} ref={ref} scale={3} position={position}>
			<primitive object={scene} />
		</mesh>
	)
}

export default Plane