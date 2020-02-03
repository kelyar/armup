import { prepareRoutes } from "@curi/router";

export const routes = prepareRoutes([
  {
    name: "Dashboard",
    path: "",
    respond() {
      return {
        body: BlankSlate
      };
    }
  }
]);
