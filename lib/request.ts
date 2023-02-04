import { TopAnime } from 'interfaces/interfaces';

interface TopAiringInterface {
  filter: string;
  page: number;
}
class MakeRequests {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * Generic makeRequest method for using fetch.
   * @param requestInfo request information to send with fetch.
   * @returns a Promise containing the response.
   */
  private async makeRequest<T>(requestInfo: RequestInfo): Promise<T> {
    const jsonResponse: Awaited<T> = await fetch(requestInfo)
      .then((response: Response) => response.json())
      .then((json: T) => json);
    return jsonResponse;
  }
  public async getTopAiring({
    filter,
    page,
  }: TopAiringInterface): Promise<TopAnime> {
    const jsonResponse: TopAnime = await this.makeRequest(
      new Request(`${this.baseURL}top/anime?filter=${filter}&page=${page}`, {
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }),
    );
    return jsonResponse;
  }
}

const makeRequests: MakeRequests = new MakeRequests(
  'https://api.jikan.moe/v4/',
);
export default makeRequests;
