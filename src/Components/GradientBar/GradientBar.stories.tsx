import type { Meta, StoryObj } from '@storybook/react'

import { GradientBar } from '.'

const meta: Meta<typeof GradientBar> = {
	title: 'Loaders/Gradient Bar',
	component: GradientBar,
	parameters: {},
}

export default meta
type Story = StoryObj<typeof GradientBar>

export const Primary: Story = {
	render: () => (
		<div
			style={{
				width: '100vw',
				height: '600px',
				backgroundColor: '#000000',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<GradientBar />
		</div>
	),
}
