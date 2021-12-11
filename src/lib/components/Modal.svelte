<script>
  import classnames from 'clsx';

  let className = '';
  export { className as class };
  export let children = undefined;
  export let open = false;

  $: classes = classnames(className, 'modal', {
    'modal-open': open
  });
</script>

<div
  {...$$restProps}
  class={classes}
>
  <div class="modal-box">
    {#if children}
      {children}
    {:else}
      <slot />
    {/if}
    {#if $$slots.action}
      <footer class="modal-action">
        <slot name="action"  />
      </footer>
    {/if}
  </div>
</div>
