<script lang="ts">
	import { onMount } from "svelte";
  import "../app.css";
  import type { LayoutData } from "./$types";
	import { invalidate } from "$app/navigation";

  export let data: LayoutData

  $: ({ session, supabase } = data) 

  onMount(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });
  
    return () => subscription.unsubscribe()
  })
</script>

<div class="m-auto flex flex-col h-screen">
  <div class="flex py-4 bg-background w-full border-b border-muted-foreground">
    <nav class="mx-auto">
      <ul class="flex space-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="m-auto border border-muted-foreground bg-background p-8 space-y-4 drop-shadow-lg rounded-md">
    <slot />
  </div>
</div>