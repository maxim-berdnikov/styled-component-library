import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { AnimateLoader } from '.'

const meta: Meta<typeof AnimateLoader> = {
	title: 'Loaders/Animate Loader',
	component: AnimateLoader,
	parameters: {},
}

export default meta
type Story = StoryObj<typeof AnimateLoader>

export const Primary: Story = {
	render: () => (
		<div
			style={{
				width: '100vw',
				height: '600px',
				backgroundColor: '#1d0035',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<AnimateLoader color='#1d0035' />
		</div>
	),
}
