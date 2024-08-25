import React, { useState, useEffect } from 'react'

export const useKeyPress = (keyTarget: string) => {
	const [isKeyPressed, setIsKeyPressed] = useState(false)

	const downHandler = ({ key }: { key: string }) => {
		if (key === keyTarget) {
			setIsKeyPressed(true)
		}
	}

	const upHandler = ({ key }: { key: any }) => {
		if (key === keyTarget) {
			setIsKeyPressed(false)
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', downHandler)
		// window.addEventListener("keyup", upHandler);

		return () => {
			window.removeEventListener('keydown', downHandler)
			// window.removeEventListener("keyup", upHandler);
		}
	}, [])

	return isKeyPressed
}
