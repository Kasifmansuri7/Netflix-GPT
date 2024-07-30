import { Info, Play } from '../Assets/SVG'

export default function VideoTitle({ movie }) {
  console.log('movie: ', movie)
  const { original_title, overview } = movie
  return (
    <div className="py-36 px-20">
      <h1 className="text-4xl">{original_title}</h1>
      <p className="w-1/3 my-6 ">{overview}</p>
      <div className="my-6 flex">
        <button
          className="mr-4 px-10
        py-2 border border-black rounded-md text-black bg-white flex items-center gap-1 text-lg font-bold">
          <Play /> Play
        </button>
        <button
          className="mr-4 px-10
        py-2 border border-black rounded-md text-white bg-black flex items-center gap-1 text-lg">
          <Info /> More Info
        </button>
      </div>
    </div>
  )
}
