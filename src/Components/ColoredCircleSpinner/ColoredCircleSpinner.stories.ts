import type { Meta, StoryObj } from '@storybook/react'

import { ColoredCircleSpinner } from '.'

const meta: Meta<typeof ColoredCircleSpinner> = {
	title: 'Loaders/Colored Circle Spinner',
	component: ColoredCircleSpinner,
}

export default meta
type Story = StoryObj<typeof ColoredCircleSpinner>

export const Primary: Story = {}
