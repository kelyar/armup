<script>
  import { currentUser } from "../stores/current-user";

</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

{#if $currentUser}
  <div class="container">
    <h4>Welcome, {$currentUser.name} (energy: {$currentUser.energy})</h4>
  </div>
{:else}no user found, please register{/if}
