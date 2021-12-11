<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Progress from './Progress.svelte';
  import '../../tailwind.css';
</script>

<Meta
	title="Components/Progress"
	component={Progress}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: ['', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']
			}
		},
		value: {
			control: {
				type: 'range',
				min: 0,
				max: 100
			}
		}
	}}
/>

<Template let:args>
	<Progress
    {...args}
    on:click={args.onClick}
  >
    Hello!
  </Progress>
</Template>

<Story
	name="Example"
/>
