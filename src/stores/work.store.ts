import { writable } from "svelte/store"
import { getContext } from "svelte"

export const steps = writable<Work[]>([], () => {
  const workService = getContext<IServicesContext>("services").workService
  return workService.subscribeWorkItems(onWorkItems)
});

const onWorkItems: WorkItemsSubscriber = (workItems) => {
  steps.set(workItems)
}