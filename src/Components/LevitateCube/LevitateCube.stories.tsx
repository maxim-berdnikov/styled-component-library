import type { Meta, StoryObj } from '@storybook/react'
import { LevitateCube } from '.'

const meta: Meta<typeof LevitateCube> = {
	title: 'Components/Levitate Cube',
	component: LevitateCube,
	parameters: {},
	decorators: [
		(Story) => (
			<div
				style={{
					backgroundColor: '#1d0035',
					minHeight: '100vh',
					minWidth: '100vw',
					overflow: 'hidden',
				}}
			>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LevitateCube>

export const Primary: Story = {}
