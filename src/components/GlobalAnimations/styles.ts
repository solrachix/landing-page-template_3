import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;

    max-height: 100vh;

    transition: all 2s;
    * {
      transition: all 2s;
    }
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > .container {
    width: 100%;
    min-height: 100%;
  }
`
