import type { Meta, StoryObj } from '@storybook/react'

import { ParticlesLoader } from '.'

const meta: Meta<typeof ParticlesLoader> = {
	title: 'Components/Particles Loader',
	component: ParticlesLoader,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof ParticlesLoader>

export const Primary: Story = {}
