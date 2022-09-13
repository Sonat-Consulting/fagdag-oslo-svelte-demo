import {initializeApp} from "@firebase/app";
import {getFirestore} from "@firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyAW3UL0Zc8m9EZ6WX1jtvYB2LZVUmmcvzA",
    authDomain: "fagdag-svelte.firebaseapp.com",
    projectId: "fagdag-svelte",
    storageBucket: "fagdag-svelte.appspot.com",
    messagingSenderId: "588721073875",
    appId: "1:588721073875:web:52f37bf101d644a5cb6e26"
})

export const firestore = getFirestore(app)