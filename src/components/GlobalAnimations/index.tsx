import { ReactNode } from 'react'

import SmoothProvider from '@/lib/react-smooth-scrolling'
import Swiper, { SwiperSlide } from '@/components/Swiper'
import Cursor from '@/components/Cursor'

import { Container } from './styles'

interface GlobalAnimationsProps {
  children: ReactNode
}

function GlobalAnimations({ children }: GlobalAnimationsProps) {
  return (
    <Container>
      <Cursor />

      <SmoothProvider skew>
        <Swiper
          direction="vertical"
          slidesPerView="auto"
          freeMode
          mousewheel
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>{children}</SwiperSlide>
        </Swiper>
      </SmoothProvider>
    </Container>
  )
}

export default GlobalAnimations
