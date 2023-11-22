import { ComponentProps } from 'react'

type PlayerProps = ComponentProps<'div'>

function Player({ ...props }: PlayerProps) {
  return (
    <div {...props}>
      <h1>Hello Player</h1>
    </div>
  )
}

export { Player, type PlayerProps }
