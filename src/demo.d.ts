type Work = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type WorkItemsSubscriber = function (WorkItem[]) : void

interface IWorkService {
    subscribeWorkItems(subscriber: WorkItemsSubscriber)
    completeWorkItem: (id: string) => Promise<void>
}