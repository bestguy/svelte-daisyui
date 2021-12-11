<script>
  import classnames from 'clsx';

  let className = '';
  export { className as class };
  export let children = undefined;
  export let color = undefined;

  $: classes = classnames(className, 'alert', {
    [`alert-${color}`]: color
  });
</script>

<div
  {...$$restProps}
  class={classes}
  role="alert"
>
  {#if children}
    {children}
  {:else}
    <slot />
  {/if}
</div>