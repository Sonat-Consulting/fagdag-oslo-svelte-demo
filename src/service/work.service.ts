import {collection, doc, Firestore, onSnapshot, updateDoc} from "@firebase/firestore";
import {firestore} from "../infrastructure/firestore";

export class WorkService implements IWorkService {
  constructor(private db: Firestore = firestore) {}

  async completeWorkItem(id: string): Promise<void> {
    return await updateDoc(doc(collection(this.db, "work"), id), {completed: true})
  }

  subscribeWorkItems(subscriber: WorkItemsSubscriber) {
    return onSnapshot(collection(this.db, "work"), (snapshot) => {
      const steps = snapshot.docs
        .map(doc =>
          ({id: doc.id, ...doc.data()})
        )
        .sort((a, b) =>
          // @ts-ignore
          a.number > b.number ? 1 : -1
        )

      // @ts-ignore
      subscriber(steps)
    })
  }
}