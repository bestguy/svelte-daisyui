<script>
  import classnames from 'clsx';

  let className = '';
  export { className as class };
  export let children = undefined;
  export let color = undefined;
  export let max = 100;
  export let value = 0;

  $: classes = classnames(className, 'progress', {
    [`progress-${color}`]: color
  });
</script>

<progress
  {...$$restProps}
  class={classes}
  max={max}
  value={value}
>
  {#if children}
    {children}
  {:else}
    <slot />
  {/if}
</progress>
