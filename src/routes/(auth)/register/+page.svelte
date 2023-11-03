<script lang="ts">
	import type { PageData } from "./$types";
  import { superForm } from 'sveltekit-superforms/client'

  export let data: PageData

  const { form, errors, enhance } = superForm(data.form, {
    resetForm: true
  })
</script>

<div>
  <form class="grid grid-cols-4 gap-4" method="POST" use:enhance>
    <label 
      class="col-span-1" 
      for="username">
        Username:
    </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="text" 
      id="username"
      bind:value={$form.username}
      name="username" />
      {#if $errors.username}
        <span class="col-span-4 text-destructive">
          {$errors.username}
        </span>
      {/if}
    <label
      class="col-span-1"
      for="email">
        Email:
    </label>
    <input
      class="col-span-3 bg-muted-foreground text-primary-foreground"
      type="email"
      id="email"
      bind:value={$form.email}
      name="email" />
      {#if $errors.email}
        <span class="col-span-4 text-destructive">
          {$errors.email}
        </span>
      {/if}
    <label 
      class="col-span-1" 
      for="password">
        Password:
    </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="password" 
      id="password"
      bind:value={$form.password}
      name="password" />
      {#if $errors.password}
        <span class="col-span-4 text-destructive">
          {$errors.password}
        </span>
      {/if}
    <label 
      class="col-span-1" 
      for="confirmPassword">
        Confirm:
    </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="password" 
      id="confirmPassword"
      bind:value={$form.confirmPassword}
      name="confirmPassword" />
      {#if $errors.confirmPassword}
        <span class="col-span-4 text-destructive">
          {$errors.confirmPassword}
        </span>
      {/if}
    <button class="col-span-4 bg-muted p-2 rounded-md" type="submit">
      Register
    </button>
  </form>
</div>