<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/components/button.svelte";
  import Input from "$lib/components/input.svelte";

  let email = "";
  let password = "";
  let error = "";

  const handleLogin = async () => {
    error = "";

    if (!email || !password) {
      error = "Email and password are required.";
      return;
    }

    // Placeholder: call your auth logic here
    try {
      // Replace with real API call
      console.log("Logging in:", { email, password });
      await new Promise((r) => setTimeout(r, 500));
      goto("/dashboard"); // or wherever
    } catch (err) {
      error = "Login failed. Please check your credentials.";
    }
  };
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

  {#if error}
    <p class="text-sm text-red-500">{error}</p>
  {/if}

  <form
    on:submit|preventDefault={handleLogin}
    class=" size-full space-y-6 flex flex-col"
  >
    <div class="space-y-4">
      <Input
        name="Email"
        type="email"
        value={email}
        placeholder="Enter email..."
        required
      />
      <Input
        name="Password"
        type="password"
        value={password}
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
