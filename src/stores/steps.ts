import { writable } from "svelte/store";
import { getContext } from "svelte";

export const steps = writable([], () => {
  const workService = getContext<IServicesContext>("services").work;
  const unsubscribe = workService.subscribeWorkItems(onWorkItems);
  return () => {
    // no more subscribers on this store
    unsubscribe();
  };
});

const onWorkItems = (workItems) => {
  steps.set(workItems);
};
