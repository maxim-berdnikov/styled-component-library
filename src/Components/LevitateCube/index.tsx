import { CSSProperties } from 'react'
import './style.scss'

export const LevitateCube = () => (
	<section className='section'>
		<div className='box'>
			<div className='cube'>
				<div className='top'></div>
				<div>
					<span style={{ '--i': 0 } as CSSProperties}></span>
					<span style={{ '--i': 1 } as CSSProperties}></span>
					<span style={{ '--i': 2 } as CSSProperties}></span>
					<span style={{ '--i': 3 } as CSSProperties}></span>
				</div>
				<div className='bottom'></div>
			</div>
		</div>
	</section>
)
