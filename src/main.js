import { hash } from "@hickory/hash";
import { createRouter, announce } from "@curi/router";

import { routes } from "./routes";
import App from "./App.svelte";

const router = createRouter(hash, routes, {
  sideEffects: [
    announce(({ response }) => {
      return `Navigated to ${response.location.pathname}`;
    })
  ]
});

const app = new App({
  target: document.body,
  props: {
    router
  }
});

export default app;
