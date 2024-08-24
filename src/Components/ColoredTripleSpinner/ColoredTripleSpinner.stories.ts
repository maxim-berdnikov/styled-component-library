import type { Meta, StoryObj } from '@storybook/react'

import { ColoredTripleSpinner } from '.'

const meta: Meta<typeof ColoredTripleSpinner> = {
	title: 'Components/Colored Triple Spinner',
	component: ColoredTripleSpinner,
}

export default meta
type Story = StoryObj<typeof ColoredTripleSpinner>

export const Primary: Story = {}
