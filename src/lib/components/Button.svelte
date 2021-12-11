<script>
	import classnames from 'clsx';

	let className = '';
	export { className as class };
	export let active = false;
	export let animation = true;
	export let block = false;
	export let children = undefined;
	export let color = 'neutral';
	export let disabled = false;
	export let href = '';
	export let inner = undefined;
	export let loading = false;
	export let outline = false;
	export let shape = null;
	export let size = null;
	export let style = '';
	export let value = '';
  export let wide = false;

	$: classes = classnames(
    'btn',	// Button
		className,
    {
      'btn-active': active,	// Force button to show active state
		  'btn-block': block, // Full width button
      'btn-disabled': disabled,	// Force button to show disabled state
      'btn-outline': outline,	// Transparent Button with colored border
      'btn-wide': wide,	// Wide button (more horizontal padding)
      [`btn-${color}`]: color, // primary secondary accent info success warning error
      [`btn-${shape}`]: shape, // circle square
		  [`btn-${size}`] : size, // lg md sm xs
      loading, // Shows loading spinner
      'no-animation': !animation, // Disables click animation
    }
	);
</script>

{#if href}
	<a
		{...$$restProps}
		class={classes}
		{disabled}
		bind:this={inner}
		on:click
		{href}
		{style}
	>
		{#if children}
			{children}
		{:else}
			<slot />
		{/if}
	</a>
{:else}
	<button
		{...$$restProps}
		class={classes}
		{disabled}
		bind:this={inner}
		on:click
		{value}
		{style}
	>
		<slot>
			{#if children}
				{children}
			{:else}
				<slot />
			{/if}
		</slot>
	</button>
{/if}
