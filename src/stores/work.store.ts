import { writable } from "svelte/store";
import { WorkService } from "../service/work.service"

export const steps = writable<Work[]>([], () => {
  // Subscription start
  const workService = new WorkService()
  const unsubscribe = workService.subscribeWorkItems(onWorkItems)

  return () => {
    // No more subscribers
    unsubscribe()
  }
});

const onWorkItems: WorkItemsSubscriber = (workItems) => {
  steps.set(workItems)
}