<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Badge from './Badge.svelte';
  import '../../tailwind.css';
</script>

<Meta
	title="Components/Badge"
	component={Badge}
	argTypes={{
		outline: { control: 'boolean' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'ghost']
			}
		},
		size: {
			control: {
				type: 'select',
				options: ['', 'xs', 'sm', 'md', 'lg']
			}
		}
	}}
/>

<Template let:args>
	<Badge
    {...args}
    on:click={args.onClick}
  >
    Hello!
  </Badge>
</Template>

<Story
	name="Example"
/>
