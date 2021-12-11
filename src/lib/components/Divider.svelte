<script>
  import classnames from 'clsx';

  let className = '';
  export { className as class };
  export let children = undefined;
  export let vertical = false;

  $: classes = classnames(className, 'divider', {
    'divider-vertical': vertical
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
