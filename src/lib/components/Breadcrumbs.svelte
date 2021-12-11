<script>
  import classnames from 'clsx';

  let className = '';
  export { className as class };
  export let children = undefined;

  $: classes = classnames(className, '', {

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
