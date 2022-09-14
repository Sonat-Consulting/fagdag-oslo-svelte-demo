type Work = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type WorkItemsSubscriber = (steps: WorkItem[]) => void

interface IWorkService {
    subscribeWorkItems(subscriber: WorkItemsSubscriber)
    completeWorkItem: (id: string) => Promise<void>
}

type IServicesContext = { workService: IWorkService }