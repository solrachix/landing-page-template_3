import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;

  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  .testimonyOptionsArrow {
    width: 100%;
    margin-top: 8px;
    padding-bottom: 2px;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    z-index: 5;

    button {
      margin-left: 64px;
      padding: 6px;

      display: flex;
      align-items: center;

      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
      text-transform: uppercase;

      background-color: transparent;
      color: ${props => props.theme.colors.primary.normal};
      border: 0;

      cursor: pointer;

      &:disabled {
        color: ${props => props.theme.colors.icons};
      }

      svg {
        margin-left: 16px;
      }
    }
  }

  @media (max-width: 960px) {
    .testimonyOptionsArrow button {
      margin-left: 0;
    }
  }
`

export const Comment = styled.div`
  display: flex;

  & > svg {
    margin-right: 32px;
  }
  &:nth-of-type(2) .testimonyContent > div {
    border-bottom: 1px solid ${props => props.theme.colors.background.lighter};
  }

  .testimonyContent {
    p {
      max-width: 576px;
    }
    & > div {
      display: flex;

      margin-top: 24px;
      padding-bottom: 64px;

      strong {
        margin-right: 24px;

        font-size: 18px;
        font-weight: 700;
        line-height: 21px;

        color: ${props => props.theme.colors.secondary};
      }
    }
  }

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      display: flex;
    }
  }

  @media (max-width: 960px) {
    & > svg {
      margin-right: 0px;
    }
  }
`
