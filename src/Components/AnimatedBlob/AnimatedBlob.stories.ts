import type { Meta, StoryObj } from '@storybook/react'

import { AnimatedBlob } from '.'

const meta: Meta<typeof AnimatedBlob> = {
	title: 'Components/Animated Blob',
	component: AnimatedBlob,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof AnimatedBlob>

export const Primary: Story = {}
