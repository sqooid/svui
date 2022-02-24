<script lang="ts">
</script>

<div class="svui-icon-nav-bar">
  <slot />
</div>

<style>
  .svui-icon-nav-bar {
    position: absolute;
    z-index: 1;
    box-sizing: border-box;
    /* box-shadow: 0 1px 10px -5px #000; */
    box-shadow: var(--svui-shadow);
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--svui-elev-1);
    width: fit-content;
    height: 100%;
    padding: 10px;
  }
</style>
