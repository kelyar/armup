<script>
  import Router from "@curi/svelte/components/Router.svelte";
  import Root from "./components/Root.svelte";

  export let router;
</script>

<Router {router}>
  <Root />
</Router>
