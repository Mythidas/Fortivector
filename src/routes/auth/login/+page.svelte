<script lang="ts">
  import Button from "$lib/components/button.svelte";
  import Input from "$lib/components/input.svelte";

  export let form;
</script>

<div class="space-y-6 p-4 card preset-tonal-surface shadow-md">
  <div>
    <h1 class="text-2xl font-semibold">Welcome back</h1>
    <p class="text-sm text-muted-foreground">
      Log in to continue to <a href="/" class="text-primary-500 hover:underline"
        >Fortivector</a
      >
    </p>
  </div>

  {#if form?.error}
    <p class="text-error-500">{form.error}</p>
  {/if}

  <form
    class=" size-full space-y-6 flex flex-col"
    method="POST"
    action="?/login"
  >
    <div class="space-y-4">
      <Input name="Email" type="email" placeholder="Enter email..." required />
      <Input
        name="Password"
        type="password"
        placeholder="Enter password..."
        required
      />
    </div>

    <div class="flex size-full">
      <Button type="submit">Login</Button>
    </div>
  </form>

  <p class="text-sm text-center text-muted-foreground">
    Don't have an account?
    <a href="/auth/register" class="text-primary-500 hover:underline"
      >Register</a
    >
  </p>
</div>
