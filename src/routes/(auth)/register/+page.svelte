<div>
  <form class="grid grid-cols-4 gap-4" method="POST" action="/register">
    <label 
      class="col-span-1" 
      for="user">
        Username:
    </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="text" name="user" />
    <label
      class="col-span-1"
      for="email">
        Email:
    </label>
    <input
      class="col-span-3 bg-muted-foreground text-primary-foreground"
      type="email"
      name="email" />
    <label 
      class="col-span-1" 
      for="password">
        Password:
    </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="password" 
      name="password" />
    <label 
      class="col-span-1" 
      for="confirmPassword">
        Confirm:
    </label>
    <input 
      class="col-span-3 bg-muted-foreground text-primary-foreground" 
      type="password" 
      name="password" />
    <button class="col-span-4 bg-muted p-2 rounded-md" type="submit">
      Register
    </button>
  </form>
</div>