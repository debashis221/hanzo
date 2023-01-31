import { RecentEpisode } from 'interfaces/interfaces';

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

  /**
   * A sample method to get posts from an API.
   * @returns the posts response.
   */
  public async getRecentEpisodes(): Promise<RecentEpisode> {
    const jsonResponse: RecentEpisode = await this.makeRequest(
      new Request(`${this.baseURL}recent-episodes`, {
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }),
    );
    return jsonResponse;
  }
}

const makeRequests: MakeRequests = new MakeRequests(
  'https://api.consumet.org/anime/zoro/',
);
export default makeRequests;
