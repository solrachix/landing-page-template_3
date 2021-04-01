import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import Lottie from 'react-lottie'
import { useTransition, animated, config, useSpring } from 'react-spring'

import animation from '@/assets/animations/intro.json'
import { useRouter } from '../../hooks/useRouter'

export const PageTransition = ({ children, ...props }) => {
  const router = useRouter()
  const [finishing, setFinishing] = useState(false)
  const [spring, set] = useSpring<{ opacity: number; scale: number }>(() => ({
    opacity: 0,
    scale: 0,
    config: { mass: 10, tension: 200, friction: 40 }
  }))

  const transitions = useTransition(router, router => router.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.wobbly

    // from: { transform: 'translateY(-2000px)' },
    // enter: { transform: 'translateY(0)' },
    // leave: { transform: 'translateY(200px)' },
    // config: config.stiff
  })
  const defaultAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  useEffect(() => {
    if (finishing) {
      set({ opacity: 1, scale: 1 })
    }
  }, [finishing])
  return (
    <>
      {transitions.map(({ item, props: style, key }) => {
        if (!item.components) {
          return null
        }

        const { Component, props } = item.components[item.pathname]

        return (
          <Page style={style} key={key}>
            {!finishing && (
              <LottieContainer>
                <Lottie
                  options={defaultAnimationOptions}
                  eventListeners={[
                    {
                      eventName: 'complete',
                      callback: () => setFinishing(true)
                    }
                  ]}
                  width="50%"
                  height="auto"
                />
              </LottieContainer>
            )}

            {finishing && (
              <animated.div
                style={{
                  opacity: spring.opacity,
                  transform: `scale(${spring.scale})`
                }}
              >
                {children(
                  item ? { Component, pageProps: props && props.pageProps } : {}
                )}
              </animated.div>
            )}
          </Page>
        )
      })}
    </>
  )
}

const Page = styled(animated.div)`
  min-height: 100%;
  height: 100vh;

  & > div {
    height: inherit;
  }
`
const LottieContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: #04d361;

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`
