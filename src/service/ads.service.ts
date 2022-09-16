export class AdsService implements IWorkAdsService {

  private apiUrl = "https://arbeidsplassen.nav.no/public-feed/api/v1/ads"
  private token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ\n"

  async getAds(): Promise<Ad[]> {
    const response = await fetch(`${this.apiUrl}?size=50`, {
      headers: {
        authorization: `Bearer ${this.token}`,
      }
    })

    const adResponse: AdResponse = await response.json()

    return adResponse.content
  }

  getAd(id: string): Promise<Ad> {
    return Promise.resolve(undefined)
  }

  getAdsByCounty(county: string): Promise<Ad[]> {
    return Promise.resolve([])
  }

}