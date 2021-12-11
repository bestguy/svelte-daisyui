<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
  import '../../tailwind.css';
</script>

<Meta
	title="Components/Button"
	component={Button}
	argTypes={{
		active: { control: 'boolean' },
    animation: { control: 'boolean' },
    block: { control: 'boolean' },
    disabled: { control: 'boolean' },
		loading: { control: 'boolean' },
		outline: { control: 'boolean' },
    wide: { control: 'boolean' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'link', 'ghost', 'glass']
			}
		},
		shape: {
			control: {
				type: 'select',
				options: ['', 'square', 'circle']
			}
		},
		size: {
			control: {
				type: 'select',
				options: ['', 'xs', 'sm', 'md', 'lg']
			}
		},
		onClick: { action: 'onClick' }
	}}
/>

<Template let:args>
	<Button
    {...args}
    on:click={args.onClick}
  >
    Hello!
  </Button>
</Template>

<Story
	name="Example"
/>
