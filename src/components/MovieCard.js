import { TMDB_IMAGE_CDN } from '../utils/constants'

export default function MovieCard({ movie }) {
  return (
    <div>
      <div className="w-48 rounded-sm overflow-hidden">
        <img
          src={TMDB_IMAGE_CDN + 'w500/' + movie.poster_path}
          alt={movie.title}
        />
      </div>
    </div>
  )
}
