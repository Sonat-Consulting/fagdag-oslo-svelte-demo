type Work = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

type WorkLocation = {
  city: string
  address: string
  postalCode: string
}

type Employer = {
  name: string
  orgnr: string
  homepage: string
  description: string
}

type Ad = {
  uuid: string
  title: string
  description: string
  updated: string
  expires: string
  workLocations: WorkLocation[]
  source: string
  applicationDue: string
  applicationUrl: string
  link: string
  employer: Employer
}

type AdResponse = {
  content: Ad[]
  totalElements: number
  pageNumber: number
  pageSize: number
  totalPages: number
  first: boolean
  last: boolean
  sort: string
}

type AdRequest = {
  page: number
  size: number
  published: string
  updated: string
  uuid: string
  source: string
  orgnr: string
  category: string
  municipal: string
  county: string
}

type WorkItemsSubscriber = (steps: WorkItem[]) => void

interface IWorkService {
  subscribeWorkItems(subscriber: WorkItemsSubscriber)

  completeWorkItem: (id: string) => Promise<void>
}

interface IWorkAdsService {
  getAds(): Promise<Ad[]>
  getAdsByCounty(county: string): Promise<Ad[]>
  getAd(id: string): Promise<Ad>
}

type IServicesContext = { workService: IWorkService, workAdsService: IWorkAdsService }