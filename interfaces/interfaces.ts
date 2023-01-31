export interface RecentEpisode {
  currentPage: number;
  hasNextPage: boolean;
  results: Result[];
}

export interface Result {
  id: string;
  image: string;
  title: string;
  url: string;
  episode: number;
}
