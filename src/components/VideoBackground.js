import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';
export default function VideoBackground({ movieId }) {
  // useTrailerVideo(movieId)
  useTrailerVideo('movieId');
  const trailerVideo = useSelector((store) => store?.movies.trailerVideo);

  return (
    <div>
      <iframe
        className="h-screen w-full"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&playsinline=1&fs=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  );
}
