<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Modal from './Modal.svelte';
  import '../../tailwind.css';
</script>

<Meta
	title="Components/Modal"
	component={Modal}
	argTypes={{
		open: { control: 'boolean' },
	}}
/>

<Template let:args>
	<Modal
    {...args}
  >
    Hello World!
  </Modal>
</Template>

<Story
	name="Example"
/>
