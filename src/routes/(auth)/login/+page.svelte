<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client'
	import type { PageData } from './$types';
  
  export let data: PageData
  const { form, errors, enhance } = superForm(data.form)
</script>

<div>
  <form class="grid grid-cols-4 gap-4" method="POST" action="/login" use:enhance>
    <label 
      class="col-span-1" 
      for="email">
        Email:
      </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="text" 
      bind:value={$form.email}
      name="email" />
      {#if $errors.email}
        <span class="text-destructive col-span-4">{$errors.email}</span>
      {/if}
    <label 
      class="col-span-1" 
      for="password">
        Password:
      </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="password" 
      bind:value={$form.password}
      name="password" />
      {#if $errors.password}
        <span class="text-destructive col-span-4">{$errors.password}</span>
      {/if} 
    <button 
      class="col-span-4 bg-muted p-2 rounded-md" 
      type="submit">
        Login
      </button>
  </form>
</div>