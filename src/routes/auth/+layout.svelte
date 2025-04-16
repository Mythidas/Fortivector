<script lang="ts">
  let { children } = $props();
</script>

<main>
  <div></div>
  <div>
    {@render children()}
  </div>
</main>
