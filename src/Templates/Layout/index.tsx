import React, { useState } from 'react'
import { Content } from 'Templates/Content'
import { Menu } from 'Templates/Menu'
import './style.scss'

export const Layout = (): JSX.Element => {
	const [currentComponet, setCurrentComponent] = useState('')

	const handleClickComponent = (title: string) => setCurrentComponent(title)

	return (
		<div className='container'>
			<Menu handleClickComponent={handleClickComponent} />
			<Content currentComponet={currentComponet} />
		</div>
	)
}
