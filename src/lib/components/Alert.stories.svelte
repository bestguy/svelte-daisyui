<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Alert from './Alert.svelte';
  import '../../tailwind.css';
</script>

<Meta
	title="Components/Alert"
	component={Alert}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: ['', 'info', 'success', 'warning', 'error']
			}
		}
	}}
/>

<Template let:args>
	<Alert
    {...args}
    on:click={args.onClick}
  >
    Hello!
  </Alert>
</Template>

<Story
	name="Example"
/>
