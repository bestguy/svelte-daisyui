<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Divider from './Divider.svelte';
  import '../../tailwind.css';
</script>

<Meta
	title="Components/Divider"
	component={Divider}
	argTypes={{
		vertical: { control: 'boolean' }
	}}
/>

<Template let:args>
	<Divider
    {...args}
    on:click={args.onClick}
  >
    OR
  </Divider>
</Template>

<Story
	name="Example"
/>
