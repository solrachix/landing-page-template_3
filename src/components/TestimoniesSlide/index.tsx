import QuotationMarks from '@/assets/icons/quotationMarks.svg'
import Arrow from '@/assets/icons/arrow.svg'

import Swiper, { SwiperSlide } from '@/components/Swiper'
import { Container, Comment } from './styles'

interface TestimoniesSlideProps {
  testimonies: {
    name: string
    testimony: string
  }[][]
}

function TestimoniesSlide({ testimonies }: TestimoniesSlideProps) {
  return (
    <Container>
      <Swiper
        slidesPerView="auto"
        navigation={{
          nextEl: '.buttonNext',
          prevEl: '.buttonBack'
        }}
      >
        {testimonies.map((testimonyArray, index) => (
          <SwiperSlide key={index}>
            {testimonyArray.map((testimony, testimonyIndex) => (
              <Comment key={testimony.name}>
                <QuotationMarks />

                <div className="testimonyContent">
                  <p className="paragraph">{testimony.testimony}</p>
                  <div>
                    <strong>{testimony.name}</strong>
                  </div>
                </div>
              </Comment>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="testimonyOptionsArrow">
        <button
          type="button"
          aria-label="previous"
          className="buttonBack"
          disabled
        >
          Voltar
        </button>
        <button type="button" aria-label="next" className="buttonNext">
          Mais depoimentos <Arrow />
        </button>
      </div>
    </Container>
  )
}

export default TestimoniesSlide
