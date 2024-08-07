export const NETFLIX_LOGO =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
export const USER_AVATAR =
  'https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'

export const MOVIE_BACKGROUND =
  'https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg'

export const NOW_PLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing'
export const POPULAR_API = 'https://api.themoviedb.org/3/movie/popular'
export const TOPRATED_API = 'https://api.themoviedb.org/3/movie/top_rated'
export const UPCOMING_API = 'https://api.themoviedb.org/3/movie/upcoming'

export const GET_API_OPTIONS = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
}

export const TMDB_IMAGE_CDN = 'https://image.tmdb.org/t/p/'
