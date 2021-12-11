<script>
  import classnames from 'clsx';

  let className = '';
  export { className as class };
  export let children = undefined;
  export let color = 'neutral'; // primary, secondary, accent, ghost, info, success, warning, error
  export let outline = false;
  export let size = false; // lg md sm xs

  $: classes = classnames(className, 'badge', {
    'badge-outline': outline,
    [`badge-${color}`]: color,
    [`badge-${size}`]: size,
  });
</script>

<div
  {...$$restProps}
  class={classes}
>
  {#if children}
    {children}
  {:else}
    <slot />
  {/if}
</div>
