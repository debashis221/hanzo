import axios, { AxiosResponse } from 'axios';
import { TopAnime } from 'interfaces/interfaces';

const instance = axios.create({
  baseURL: 'https://api.jikan.moe/v4/',
  timeout: 15000,
});

interface TopAiringInterface {
  filter: string;
  page: number;
}

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Anime = {
  getTopAiring: ({ filter, page }: TopAiringInterface): Promise<TopAnime> =>
    requests.get(`top/anime?filter=${filter}&page=${page}`),
  getPopularAnime: ({ filter, page }: TopAiringInterface): Promise<TopAnime> =>
    requests.get(`top/anime?filter=${filter}&page=${page}`),
};
