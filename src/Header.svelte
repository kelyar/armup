<script>
  import Link from "@curi/svelte/components/Link.svelte";
  import UserHeader from "./components/UserHeader.svelte";
</script>

<style>
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top-color: currentcolor;
    border-top-style: none;
    border-top-width: 0px;
    border-top: 1px solid #eee;
  }
</style>

<div>
  <Link name="Dashboard">ArmUp</Link>
</div>
<hr />
<UserHeader />
