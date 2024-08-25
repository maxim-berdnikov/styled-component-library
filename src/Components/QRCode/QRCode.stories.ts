import type { Meta, StoryObj } from '@storybook/react'

import { QRCode } from '.'

const meta: Meta<typeof QRCode> = {
	title: 'Components/QRCode',
	component: QRCode,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof QRCode>

export const Primary: Story = {}
