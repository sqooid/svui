<script lang="ts">
</script>

<div class="svui-icon-nav-bar">
  <slot />
</div>

<style>
  .svui-icon-nav-bar {
    box-sizing: border-box;
    box-shadow: 0 0 10px -5px #0007;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--svui-elev-1);
    width: fit-content;
    height: 100%;
    padding: 10px;
  }
</style>
