import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  width: 100%;

  img,
  video {
    height: auto;
    max-width: 100%;
    width: 100%;
  }

  section {
    .container {
      width: 1120px;

      display: flex;
      justify-content: space-between;
    }
    .title {
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: 67px;
      color: ${props => props.theme.colors.secondary};
    }
    .titleSection {
      font-size: 54px;
      font-weight: 700;
      line-height: 60px;
      color: ${props => props.theme.colors.secondary};
    }
    .subTitleSection {
      font-size: 24px;
      font-weight: 700;
      line-height: 34px;
      color: ${props => props.theme.colors.secondary};
    }
    .subtitle {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      color: ${props => props.theme.colors.text.normal};
    }
    .paragraph {
      font-size: ${props => props.theme.colors.text.size};
      font-weight: 400;
      line-height: 28px;
      color: ${props => props.theme.colors.text.normal};
    }

    &.capture {
      min-height: 100vh;
      padding-top: 56px;
      padding-bottom: 130px;

      background-color: ${props => props.theme.colors.background.normal};

      display: flex;
      justify-content: center;

      & > div {
        position: relative;
      }

      .captureContent {
        h1 {
          margin-top: 200px;
          font-size: 96px;
          margin-bottom: 24px;
        }
        h2 {
          margin-top: 48px;
          max-width: 485px;
          margin-bottom: 32px;
        }
        b {
          color: ${props => props.theme.colors.green};
        }
        button {
          max-width: 140px;
          margin-top: 96px;

          font-weight: bold;
          font-size: 14px;
          line-height: 28px;

          background: none;
          border: none;
          color: #e1e1e6;

          display: flex;
          align-items: center;

          svg {
            width: 22px;
            height: 22px;
            margin-left: 16px;

            color: ${props => props.theme.colors.green};

            transition: all 0.2s;
          }
        }
      }

      .captureAction {
        position: absolute;
        top: -15%;
        right: 0;

        min-width: 448px;
        min-height: 100vh;
        padding: 0 76px;

        background-color: red;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background: ${props => props.theme.colors.linearGradient.normal};

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .bgt {
          display: flex;
          flex-direction: column;
          align-items: center;

          .icon-attention {
            width: 56px;
            height: 56px;
            margin-bottom: 16px;

            color: #fd951f;
          }

          h3 {
            width: 100%;

            color: #fd951f;

            font-size: 24px;
            text-align: center;
            line-height: 34px;
            font-weight: 400;
          }
        }

        .logo {
          margin: 40px 0;
        }
      }
    }

    &.methodology {
      padding-top: 130px;
      padding-bottom: 64px;

      display: flex;
      justify-content: center;

      background: linear-gradient(
        180deg,
        #0b0b0d -72.08%,
        rgba(9, 9, 10, 0.5) 56.98%,
        rgba(9, 9, 10, 0)
      );

      .methodologyPolygon {
        width: 100%;
        max-width: 535px;

        .methodologyPolygonGrid {
          position: relative;
          height: 398px;

          display: grid;
          grid-template-areas:
            'ItemMethodology ItemMethodology'
            'ItemAttitude ItemResume';

          text-align: center;

          background-size: cover;
          background: url('/images/polygon.png') 50% no-repeat;

          strong {
            font-size: 36px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 12px;
            color: ${props => props.theme.colors.secondary};
          }
          span {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: ${props => props.theme.colors.green};
          }

          .ItemAttitude,
          .ItemMethodology,
          .ItemResume {
            display: flex;
            position: absolute;
            flex-direction: column;
          }

          .ItemMethodology {
            grid-area: ItemMethodology;
            top: -5px;
            right: 0;
            left: 0;

            margin-bottom: 234px;
          }
          .ItemAttitude {
            grid-area: ItemAttitude;
            left: 0;
            bottom: 0;
          }
          .ItemResume {
            grid-area: ItemResume;
            right: 0;
            bottom: -28px;
          }
        }

        .polygonMobile {
          display: none;
        }
      }
      .methodologyContent {
        h2 {
          max-width: 302px;
          margin-bottom: 32px;
        }
        h3 {
          max-width: 384px;
          margin-bottom: 32px;

          font-weight: 400;
          color: ${props => props.theme.colors.green};
        }
        p {
          max-width: 384px;
        }
      }
    }

    &.whyIgnite {
      padding-top: 188px;
      padding-bottom: 240px;

      display: flex;
      justify-content: center;

      background-color: ${props => props.theme.colors.background.normal};

      & > div {
        flex-direction: column;
      }

      .whyIgniteTop h2 {
        margin-bottom: 64px;
      }
      .whyIgniteDown {
        list-style: none;

        display: grid;
        grid-gap: 40px 64px;
        gap: 40px 64px;
        grid-template-columns: repeat(3, 1fr);

        li {
          padding-bottom: 40px;

          &:first-child,
          &:nth-child(2),
          &:nth-child(3) {
            border-bottom: 1px solid #29292e;
          }
        }
      }
    }

    &.trails {
      display: flex;
      justify-content: center;
      padding-bottom: 260px;
      background-color: ${props => props.theme.colors.background.normal};

      & > div {
        align-items: center;
        flex-direction: column;
      }

      .trailsTop {
        .titleSection {
          font-size: 48px;
          line-height: 56px;
          margin-bottom: 62px;
        }
      }
      .trailsDown {
        grid-gap: 32px;
        gap: 32px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        li {
          list-style: none;
          transition: all 0.3s ease;

          background-color: ${props => props.theme.colors.background.light};
          border-radius: 5px;

          button {
            border: 0;
            width: 100%;
            height: 64px;
            margin-bottom: 16px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            font-size: 16px;
            font-weight: 700;
            line-height: 26px;
            padding: 20px 32px;
            text-transform: uppercase;

            border-radius: 5px;
          }

          &:first-child {
            button {
              color: ${props => props.theme.colors.background.normal};
              background-color: ${props =>
                props.theme.colors.react}; /* react */
            }

            .teacher span,
            strong {
              color: ${props => props.theme.colors.react}; /* react */
            }

            &:hover {
              box-shadow: 0 0 0 2px ${props => props.theme.colors.react}; /* react */
            }
          }
          &:nth-child(2) {
            button {
              color: ${props => props.theme.colors.background.normal};
              background-color: #8cc84b;
            }

            .teacher span,
            strong {
              color: #8cc84b;
            }

            &:hover {
              box-shadow: 0 0 0 2px #8cc84b;
            }
          }
          &:nth-child(3) {
            button {
              color: ${props => props.theme.colors.background.normal};
              background-color: #a32ddf;
            }

            .teacher span,
            strong {
              color: #a32ddf;
            }

            &:hover {
              box-shadow: 0 0 0 2px #a32ddf;
            }
          }

          .trail {
            padding: 32px;

            & > svg {
              margin-bottom: 32px;
            }
            h3 {
              font-size: 30px;
              font-weight: 400;
              line-height: 41px;
              color: ${props => props.theme.colors.text.normal};
            }
            span {
              font-size: 20px;
              font-weight: 400;
              line-height: 30px;
              color: ${props => props.theme.colors.text.normal};
            }
            & > .paragraph {
              margin-top: 24px;
              padding-bottom: 32px;
              border-bottom: 1px solid
                ${props => props.theme.colors.background.lighter};
            }
            .teacher {
              padding-top: 32px;
              padding-bottom: 80px;

              span {
                font-size: 20px;
                font-weight: 500;
                line-height: 23px;
              }
              p {
                font-size: 16px;
                font-weight: 400;
                line-height: 26px;
              }

              & > div {
                display: flex;
                align-items: center;
                margin-top: 24px;
                margin-bottom: 16px;

                img {
                  width: 80px;
                  height: 80px;
                  border-radius: 50%;
                  margin-right: 24px;
                }
                h3 {
                  font-size: 24px;
                  font-weight: 700;
                  line-height: 30px;
                  color: ${props => props.theme.colors.secondary};
                }
              }
            }
          }
        }
      }
    }

    &.advance {
      display: flex;
      justify-content: center;
      padding-bottom: 288px;
      background-color: ${props => props.theme.colors.background.normal};

      & > div {
        position: relative;

        .advanceLeft {
          z-index: 5;
          h2 {
            max-width: 525px;
            margin-bottom: 32px;
          }
          p {
            max-width: 543px;
            margin-bottom: 32px;
          }
          .higher {
            width: 704px;
            height: 178px;
            margin-top: 32px;
            position: relative;

            &:before {
              content: '';
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 1;
              background: url('/images/Higher.png') 100% no-repeat;
              background-size: cover;
            }
          }
          .mobile {
            display: none;
          }
        }

        .advanceRight {
          right: 0;
          position: absolute;

          z-index: 0;
        }
      }
    }

    &.testimony {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 120px;
      background-color: ${props => props.theme.colors.background.normal};

      .testimonyLeft {
        max-width: 333px;
        h2 {
          max-width: 322px;
          margin-bottom: 32px;
        }
        strong {
          color: ${props => props.theme.colors.green};
        }
      }

      .testimonyRight {
        display: flex;
        justify-content: space-between;
        max-width: 640px;
      }
    }

    &.testimonyVideo {
      display: flex;
      justify-content: center;

      padding-bottom: 288px;

      background-color: ${props => props.theme.colors.background.normal};

      .testimonyVideoContent {
        flex: 1 1;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        grid-gap: 80px 32px;
        gap: 80px 32px;

        list-style: none;

        li {
          height: 192px;
          border-radius: 5px;
          background: ${props => props.theme.colors.black};

          div {
            border-radius: 5px;
          }

          .video {
            width: 100%;
            height: 100%;
            border-radius: 5px;

            iframe {
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }

          h3 {
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            margin-top: 16px;
          }
        }
      }
    }

    &.warning {
      display: flex;
      justify-content: center;
      padding-top: 130px;
      padding-bottom: 260px;

      & > div {
        position: relative;
        align-items: center;
        flex-direction: column;

        svg {
          top: -22%;
          position: absolute;

          path {
            fill: ${props => props.theme.colors.orange};
          }
        }

        .warningBackground {
          width: 100%;
          height: 231px;

          display: flex;
          align-items: center;
          flex-direction: column;

          background-color: red;
          background-size: cover;
          background: url('/images/spoiler.svg') 50% no-repeat;

          h2 {
            padding-top: 67px;
            max-width: 400px;
            margin-bottom: 16px;

            font-size: 36px;
            font-weight: 700;
            line-height: 46px;
            text-align: center;

            color: ${props => props.theme.colors.secondary};
          }
          p {
            max-width: 460px;
            text-align: center;
          }
        }
      }
    }

    &.summary {
      display: flex;
      justify-content: center;
      padding-bottom: 260px;
      background-color: ${props => props.theme.colors.background.normal};

      .summaryLeft {
        h2 {
          margin-bottom: 54px;
        }
      }

      .summaryRight {
        display: grid;
        grid-gap: 40px 20px;
        gap: 40px 20px;
        grid-template-columns: repeat(3, 1fr);

        list-style: none;

        li {
          display: flex;
          align-items: center;

          svg {
            width: 48px;
            height: 48px;
            min-width: 48px;
            min-height: 48px;
            margin-right: 24px;
          }

          div {
            display: flex;
            align-items: center;
            font-size: 20px;
            font-weight: 500;
            line-height: 30px;
            color: ${props => props.theme.colors.secondary};
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    section {
      &.capture {
        .captureContent {
        }

        .captureAction {
          top: -20%;
          min-width: 350px;
          padding: 40px 24px 32px;
        }
      }

      &.summary {
        .summaryRight div {
          font-size: 16px;
          line-height: auto;
        }
      }
    }
  }

  @media (max-width: 1160px) {
    section {
      .container {
        margin: 0 24px;
      }
    }
  }

  @media (max-width: 960px) {
    section {
      .container {
        width: 100%;
      }
      .titleSection {
        font-size: 40px;
      }

      &.capture {
        min-height: unset;

        & > div {
          flex-direction: column;
        }
        .captureContent {
          h1 {
            margin-top: 48px;
          }
          h2 {
            margin-bottom: 40px;
          }
          button {
            display: none;
          }
        }

        .captureAction {
          flex: 1 1;
          position: unset;
          min-height: unset;
          max-width: none;
          min-width: none;
          border-radius: 5px;
          min-width: 100px;

          .bgt {
            flex-direction: row;
            justify-content: flex-start;
          }
          .logo {
            margin: 32px 0;
            svg {
              max-height: 200px;
            }
          }
        }
      }

      &.methodology {
        padding-top: 120px;

        & > div {
          flex-direction: column-reverse;

          .methodologyPolygon {
            margin-top: 40px;
          }
          .methodologyContent {
            h2,
            h3,
            p {
              max-width: none;
            }
          }
        }
      }

      &.whyIgnite {
        padding: 120px 0;

        .whyIgniteDown {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      &.trails {
        padding-bottom: 120px;

        .trailsDown {
          grid-template-columns: repeat(1, 1fr);
        }
      }

      &.advance {
        padding-bottom: 120px;

        .advanceRight {
          /* display: none; */
        }
        .advanceLeft {
          width: 100%;
        }
      }

      &.testimony {
        padding-bottom: 80px;

        & > div {
          flex-direction: column;

          .testimonyLeft,
          .testimonyLeft h2 {
            max-width: none;
          }

          .testimonyLeft p {
            max-width: 800px;
            margin-bottom: 64px;
          }
        }
      }

      &.testimonyVideo {
        padding-bottom: 120px;

        .testimonyVideoContent {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      &.warning {
        padding-top: 90px;
        padding-bottom: 120px;
        background-size: cover;
        background: url('/images/spoiler.svg') 50% no-repeat;

        & > div {
          position: relative;
          align-items: center;
          flex-direction: column;
          svg {
            top: -12%;
            width: 88px;
            height: 88px;
          }

          .warningBackground {
            background: none;
          }
        }
      }

      &.summary {
        padding-bottom: 120px;

        & > div {
          flex-direction: column;

          .summaryRight {
            grid-gap: 24px;
            gap: 24px;
            grid-template-columns: repeat(2, 1fr);
          }
        }
      }
    }
  }

  @media (max-width: 550px) {
    section {
      .titleSection {
        font-size: 30px;
        font-weight: 700;
        line-height: 35px;
      }

      &.capture {
        padding-bottom: 120px;

        .captureContent {
          h1 {
            font-size: 50px;
            font-weight: 700;
            line-height: 50px;
            margin-bottom: 19px;
          }
          h2 {
            max-width: 290px;
            font-size: 15px;
            line-height: 25px;
            margin-bottom: 44px;
          }
          button {
            display: none;
          }
        }

        .captureAction {
          .logo svg {
            max-height: 200px;
          }
        }
      }

      &.methodology {
        padding-top: 120px 0;

        & > div {
          flex-direction: column-reverse;

          .methodologyPolygon {
            margin-top: 40px;

            .methodologyPolygonGrid {
              display: none;
            }
            .polygonMobile {
              display: block;
            }
          }
          .methodologyContent {
            h2 {
              max-width: 198px;
              margin-bottom: 16px;
            }
            h3 {
              max-width: 327px;
              margin-bottom: 16px;
            }
            p {
              max-width: 290px;
            }
          }
        }
      }

      &.whyIgnite {
        padding-top: 0;
        padding-bottom: 120px;

        .whyIgniteDown {
          grid-template-columns: repeat(1, 1fr);
        }
      }

      &.trails {
        padding-bottom: 120px;

        .trailsDown {
          grid-template-columns: repeat(1, 1fr);
        }
      }

      &.advance {
        padding-bottom: 120px;

        & > div {
          .advanceLeft {
            p {
              max-width: 327px;
              margin-bottom: 24px;
            }
            .higher {
              display: none;
            }
            .mobile {
              display: block;
            }
          }
          .advanceRight {
            display: block;
          }
        }
      }

      &.testimony {
        & > div {
          .testimonyLeft p {
            font-size: 16px;
            margin-bottom: 32px;
          }
          .testimonyRight {
            max-width: 300px;

            margin: auto;

            .testimonyOptionsArrow button {
              margin-left: 0;
            }
          }
        }
      }

      &.testimonyVideo {
        .testimonyVideoContent {
          grid-template-columns: repeat(1, 1fr);
        }
      }

      &.warning {
      }

      &.summary {
        & > div {
          .summaryRight {
            grid-gap: 24px;
            gap: 24px;
            grid-template-columns: repeat(1, 1fr);
          }
        }
      }
    }
  }
`
