import { selectCurrentLesson, selectPlayer } from '../features/player'
import { useAppSelector } from '../store/hooks'

/* eslint-disable react/no-unescaped-entities */
export function Header() {
  const { currentModule, currentLesson } = useAppSelector(selectCurrentLesson)
  const { isLoading } = useAppSelector(selectPlayer)

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo "{currentModule?.title}"
      </span>
    </div>
  )
}
