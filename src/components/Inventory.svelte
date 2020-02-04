<script>
  import { currentUser } from "../stores/current-user";
</script>

<style>
  .figure {
    display: flex;
    flex-direction: column;
  }
  .head,
  .arm,
  .foot,
  .body {
    border: 1px solid black;
    width: 80px;
    height: 80px;
    cursor: pointer;
  }
  .row {
    display: flex;
    justify-content: center;
  }
</style>

INVENTORY
{#if $currentUser}
  <div class="figure">

    <div class="row">
      <span class="head" />
    </div>
    <div class="row">
      <span class="arm" />
      <span class="body" />
      <span class="arm" />
    </div>
    <div class="row">
      <span class="foot" />
      <span class="foot" />
    </div>

  </div>
{:else}no user found, please register{/if}
