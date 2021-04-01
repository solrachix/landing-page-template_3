import { ReactNode } from 'react'

import SmoothScroll from '@/lib/react-smooth-scrolling'
import Swiper, { SwiperSlide } from '@/components/Swiper'
import Cursor from '@/components/Cursor'

import { Container } from './styles'

interface GlobalAnimationsProps {
  children: ReactNode
}

function GlobalAnimations({ children }: GlobalAnimationsProps) {
  return (
    <Container>
      <Cursor color="#04d361" />

      <SmoothScroll skew>
        {children}
        {/* <Swiper
          direction="vertical"
          slidesPerView="auto"
          freeMode
          mousewheel
          scrollbar={{ snapOnRelease: true, hide: false, draggable: true }}
        >
          <SwiperSlide>{children}</SwiperSlide>
        </Swiper> */}
      </SmoothScroll>
    </Container>
  )
}

export default GlobalAnimations
