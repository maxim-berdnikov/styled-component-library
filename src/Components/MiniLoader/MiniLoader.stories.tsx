import type { Meta, StoryObj } from '@storybook/react'

import { MiniLoader } from '.'

const meta: Meta<typeof MiniLoader> = {
	title: 'Loaders/Mini Loader',
	component: MiniLoader,
	parameters: {},
}

export default meta
type Story = StoryObj<typeof MiniLoader>

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
			<MiniLoader />
		</div>
	),
}
