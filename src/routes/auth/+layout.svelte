<script lang="ts">
  let { children } = $props();
</script>

<main class="flex min-h-screen bg-muted">
  <!-- Left Side: Form Container -->
  <div
    class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background shadow-md"
  >
    <div class="max-w-md w-full">
      {@render children()}
    </div>
  </div>

  <!-- Right Side: Image -->
  <div class="hidden lg:block w-1/2 bg-primary-900-100">
    <img src="" alt="Cybersecurity visual" class="object-cover w-full h-full" />
  </div>
</main>
