import {writable} from "svelte/store";
import {subscribe} from "../services/firestore";

export const steps = writable([], () => {
    const unsubscribeFirestore = subscribe(onFirestoreData);
    return () => {
        unsubscribeFirestore()
    }
})

const onFirestoreData = stepsFromFirestore => {
    steps.set(stepsFromFirestore)
}