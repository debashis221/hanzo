import makeRequests from '@/lib/request';
import { Result } from 'interfaces/interfaces';
import { Card, SectionTitle } from 'components';

export default async function Page() {
  const recentEpisode = await makeRequests.getRecentEpisodes();
  if (!recentEpisode) return null;
  return (
    <div className="flex flex-col">
      {/* Recent Episode */}
      <SectionTitle title="Latest Episodes" />
      <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {recentEpisode.results.slice(0, 14).map((episode: Result) => {
          return <Card episode={episode} key={episode.id} />;
        })}
      </div>
    </div>
  );
}
