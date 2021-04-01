import { ReactElement, useEffect, useState } from 'react'

import { useTrail } from 'react-spring'

import { Cursor, CursorSphere } from './styles'

interface CursorProps {
  color?: string
}

interface Event extends MouseEvent {
  path: HTMLElement[]
}
const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 40 }
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const disable = ['button', 'input']

function CursorComponent({ color }: CursorProps): ReactElement {
  const [disabled, setDisabled] = useState(false)
  const [trail, set] = useTrail<{ xy: number[] }>(2, () => ({
    xy: [0, 0],
    config: i => (Number(i) === 0 ? fast : slow)
  }))

  const style = {
    color
  }

  useEffect(() => {
    window.addEventListener('mousemove', (event: Event) => {
      window.document.body.style.cursor = 'none'

      const { pageX, pageY } = event
      console.log(event)
      const elem = event.path[0]
      setDisabled(disable.includes(elem.tagName.toLocaleLowerCase()))

      set({ xy: [pageX, pageY] })
    })
  }, [])

  return (
    !disabled && (
      <>
        <Cursor
          color={style.color}
          style={{ ...style, transform: trail[0].xy.interpolate(trans) }}
        />
        <CursorSphere
          color={style.color}
          style={{ ...style, transform: trail[1].xy.interpolate(trans) }}
        />
      </>
    )
  )
}

CursorComponent.prototype = {
  color: '#000'
}

export default CursorComponent
