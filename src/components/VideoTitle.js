import { Info, Play } from '../Assets/SVG'

export default function VideoTitle({ movie }) {
  const { original_title, overview } = movie
  return (
    <div className="h-screen pt-16 w-1/3 absolute bg-gradient-to-r from-black">
      <div className="top-2/4 left-24 absolute">
        <h1 className="text-4xl text-white">{original_title}</h1>
        <p className="my-6 text-white">{overview}</p>
        <div className="my-6 flex">
          <button
            className="mr-4 px-10
          py-2 border border-black rounded-md text-black bg-white flex items-center gap-1 text-lg font-bold hover:bg-opacity-80">
            <Play /> Play
          </button>
          <button
            className="mr-4 px-10
          py-2 border border-black rounded-md text-white bg-black flex items-center gap-1 text-lg hover:bg-opacity-80">
            <Info /> More Info
          </button>
        </div>
      </div>
    </div>
  )
}
