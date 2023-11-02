<script>
  import "../app.css";
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