import { prepareRoutes } from "@curi/router";
import Inventory from './components/Inventory.svelte';

export const routes = prepareRoutes([
  {
    name: "Dashboard",
    path: "",
    respond() {
      return {
        body: '',
      };
    }
  },
  {
  name: "Inventory",
    path: "inventory",
    respond() {
      return {
        body: Inventory,
      };
    }
  }
]);
