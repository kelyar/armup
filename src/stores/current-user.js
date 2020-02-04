import { writable } from "svelte/store";

export const currentUser = writable({ name: "Player1", energy: 5, hp: 100 });
