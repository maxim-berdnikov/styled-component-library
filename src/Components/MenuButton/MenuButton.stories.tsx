import type { Meta, StoryObj } from '@storybook/react'
import { MenuButton } from '.'

const meta: Meta<typeof MenuButton> = {
	title: 'Components/Menu Button',
	component: MenuButton,
	parameters: {},
}

export default meta
type Story = StoryObj<typeof MenuButton>

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
			<MenuButton />
		</div>
	),
}
