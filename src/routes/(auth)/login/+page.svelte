<div>
  <form class="grid grid-cols-4 gap-4" method="POST" action="/login">
    <label 
      class="col-span-1" 
      for="user">
        Username:
      </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="text" 
      name="user" />
    <label 
      class="col-span-1" 
      for="password">
        Password:
      </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="password" 
      name="password" />
    <button 
      class="col-span-4 bg-muted p-2 rounded-md" 
      type="submit">
        Login
      </button>
  </form>
</div>