import { CSSProperties, FC } from 'react'
import './style.scss'

type AnimateLoaderProps = {
	/**
	 *  Цвет внутри Loader, должен совпадать с цветом фона
	 */
	color?: string
}

export const AnimateLoader: FC<AnimateLoaderProps> = ({ color }) => (
	<div
		className='animate-loader'
		style={{ '--color': color } as CSSProperties}
	/>
)
