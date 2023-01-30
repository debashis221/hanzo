import { Card } from 'components';
import { RecentEpisode } from 'interfaces/interfaces';
interface RecentEpisodeProps {
  episodes: RecentEpisode[];
}
const RecentEpisode: React.FC<RecentEpisodeProps> = ({ episodes }) => {
  if (!episodes.length) return null;
  return (
    <div className="flex px-2">
      {episodes.map((episode: RecentEpisode) => {
        return <Card episode={episode} key={episode.episodeId} />;
      })}
    </div>
  );
};

export default RecentEpisode;
