import {writable} from "svelte/store";
import {WorkService} from "../services/work.service";

export const steps = writable([], () => {
    const workService = new WorkService()
    const unsubscribe = workService.subscribeWorkItems(onWorkItems);
    return () => {
        // no more subscribers on this store
        unsubscribe()
    }
})

const onWorkItems = workItems => {
    steps.set(workItems)
}