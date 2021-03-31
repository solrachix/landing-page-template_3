import styled from 'styled-components'

import { animated } from 'react-spring'

const CursorDefault = styled(animated.div)`
  @media (any-pointer: fine) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    transition: none !important;
  }

  z-index: 9999999;
`
export const Cursor = styled(CursorDefault)`
  width: 6px;
  height: 6px;

  background: red;
  border-radius: 500px;
`

export const CursorSphere = styled(CursorDefault)`
  width: 30px;
  height: 30px;

  border: 3px solid red;
  border-radius: 500px;

  transform: translate(-50%, -50%);
`
