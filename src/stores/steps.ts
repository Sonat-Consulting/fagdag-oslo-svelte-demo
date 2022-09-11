import {writable} from "svelte/store";

export const steps = writable([
    {
        id: 1,
        title: "Getting started",
        completed: true,
        description: "Set up project and install dependencies"
    },
    {
        id: 2,
        title: "Creating sub components",
        completed: false,
        description: "Create sub component to show how Svelte code modularization works"
    },
    {
        id: 3,
        title: "Passing props",
        completed: false,
        description: "Demonstrate how data is passed between components in Svelte"
    },
    {
        id: 4,
        title: "Triggering events",
        completed: false,
        description: "Demonstrate how sub components can notify parent components of data change"
    },
    {
        id: 5,
        title: "Finalize",
        completed: false,
        description: "Do this one last thing"
    }
])