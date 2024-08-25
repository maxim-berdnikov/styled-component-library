import { CSSProperties, useState } from 'react'
import classNames from 'classnames'
import {
	BonfireOutline,
	CameraOutline,
	ChatbubbleOutline,
	AlarmOutline,
	GameControllerOutline,
	MoonOutline,
	WaterOutline,
	TimeOutline,
	CloseOutline,
} from 'react-ionicons'

import './style.scss'

export const MenuButton = (): JSX.Element => {
	const [isActive, setIsActive] = useState(false)

	const handleToggleActive = (status: boolean) => setIsActive(status)

	return (
		<div className='nine-dots-menu'>
			<div className='main'>
				<div
					className={classNames('navigation', isActive && 'active')}
					onClick={() => handleToggleActive(true)}
				>
					<div style={{ '--i': 0, '--x': -1, '--y': 0 } as CSSProperties}>
						<CameraOutline cssClasses='icon' />
					</div>
					<div style={{ '--i': 1, '--x': 1, '--y': 0 } as CSSProperties}>
						<BonfireOutline cssClasses='icon' />
					</div>
					<div style={{ '--i': 2, '--x': 0, '--y': -1 } as CSSProperties}>
						<ChatbubbleOutline cssClasses='icon' />
					</div>
					<div style={{ '--i': 3, '--x': 0, '--y': 1 } as CSSProperties}>
						<AlarmOutline cssClasses='icon' />
					</div>
					<div style={{ '--i': 4, '--x': -1, '--y': 1 } as CSSProperties}>
						<GameControllerOutline cssClasses='icon' />
					</div>
					<div style={{ '--i': 5, '--x': -1, '--y': -1 } as CSSProperties}>
						<MoonOutline cssClasses='icon' />
					</div>
					<div style={{ '--i': 6, '--x': 1, '--y': -1 } as CSSProperties}>
						<WaterOutline cssClasses='icon' />
					</div>
					<div style={{ '--i': 7, '--x': 1, '--y': 1 } as CSSProperties}>
						<TimeOutline cssClasses='icon' />
					</div>
				</div>

				<div className='close' onClick={() => handleToggleActive(false)}>
					<CloseOutline cssClasses='icon' />
				</div>
			</div>
		</div>
	)
}
