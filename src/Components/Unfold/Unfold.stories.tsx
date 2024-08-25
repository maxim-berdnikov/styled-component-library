import type { Meta, StoryObj } from '@storybook/react'

import { Unfold } from '.'

const meta: Meta<typeof Unfold> = {
	title: 'Components/Unfold',
	component: Unfold,
	decorators: [
		(Story) => (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100vw',
					minHeight: '100vh',
					backgroundColor: '#2f364f',
					overflow: 'hidden',
				}}
			>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof Unfold>

export const Primary: Story = {}
