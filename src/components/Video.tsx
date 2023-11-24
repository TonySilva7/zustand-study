import ReactPlayer from 'react-player'
import { next, selectCurrentLesson, selectPlayer } from '../features/player'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Loader } from 'lucide-react'

export function Video() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useAppSelector(selectCurrentLesson)
  const { isLoading } = useAppSelector(selectPlayer)

  function handlePlayNext() {
    dispatch(next())
  }

  if (!currentLesson) return null

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
