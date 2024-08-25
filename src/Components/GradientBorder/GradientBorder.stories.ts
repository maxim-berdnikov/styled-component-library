import type { Meta, StoryObj } from '@storybook/react'

import { GradientBorder } from '.'

const meta: Meta<typeof GradientBorder> = {
	title: 'Components/Gradient Border',
	component: GradientBorder,
}

export default meta
type Story = StoryObj<typeof GradientBorder>

export const Primary: Story = {}
