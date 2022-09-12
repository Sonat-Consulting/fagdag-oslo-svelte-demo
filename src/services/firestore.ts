import {collection, doc, getFirestore, onSnapshot, updateDoc} from "@firebase/firestore";
import {initializeApp} from "@firebase/app";

const app = initializeApp({
    apiKey: "AIzaSyAW3UL0Zc8m9EZ6WX1jtvYB2LZVUmmcvzA",
    authDomain: "fagdag-svelte.firebaseapp.com",
    projectId: "fagdag-svelte",
    storageBucket: "fagdag-svelte.appspot.com",
    messagingSenderId: "588721073875",
    appId: "1:588721073875:web:52f37bf101d644a5cb6e26"
})

const db = getFirestore(app)

export const subscribe = (subscriberFn) => onSnapshot(collection(db, "work"), (snapshot) => {
    const steps = snapshot.docs
        .map(doc =>
            ({id: doc.id, ...doc.data()})
        )
        .sort((a, b) =>
            // @ts-ignore
            a.number > b.number ? 1 : -1
        )

    subscriberFn(steps)
})

export const complete = async (id: string) => {
    await updateDoc(doc(collection(db, "work"), id), {completed: true})
}