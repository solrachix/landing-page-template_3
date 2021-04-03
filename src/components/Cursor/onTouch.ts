export default function onTouch(event: TouchEvent): void {
  // event.preventDefault()
  if (
    event.touches.length > 1 ||
    (event.type === 'touchend' && event.touches.length > 0)
  ) {
    return
  }

  const newEvent = document.createEvent('MouseEvents')
  let type = null
  let touch: Touch = null

  switch (event.type) {
    case 'touchstart':
      type = 'mousedown'
      touch = event.changedTouches[0]
      break
    case 'touchmove':
      type = 'mousemove'
      touch = event.changedTouches[0]
      break
    case 'touchend':
      type = 'mouseup'
      touch = event.changedTouches[0]
      break
  }

  newEvent.initMouseEvent(
    type,
    true,
    true,
    event.target.ownerDocument.defaultView,
    0,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    event.ctrlKey,
    event.altKey,
    event.shiftKey,
    event.metaKey,
    0,
    null
  )
  event.target.dispatchEvent(newEvent)
}
