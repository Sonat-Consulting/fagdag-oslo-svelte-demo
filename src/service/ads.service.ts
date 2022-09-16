export class AdsService implements IWorkAdsService {

  private token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ\n"

  getAds(): Promise<Ad[]> {
    return Promise.resolve([])
  }

  getAd(id: string): Promise<Ad> {
    return Promise.resolve(undefined)
  }

  getAdsByCounty(county: string): Promise<Ad[]> {
    return Promise.resolve([])
  }

}