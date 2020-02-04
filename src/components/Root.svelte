<script>
  import { getResponse } from "@curi/svelte";
  import Link from "@curi/svelte/components/Link.svelte";
  import Header from "../Header.svelte";

  $: response = getResponse();
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .layout {
    margin-left: auto;
    margin-right: auto;
    min-width: 1170px;
  }
  .content {
    display: flex;
    min-width: 920px;
  }
</style>

<div class="container">
  <div class="layout">
    <Header />
    <div class="content">
      {#if $response}
        <svelte:component this={$response.body} />
      {/if}

      <a href="/#inventory">Inventory</a>

    </div>
  </div>
</div>
