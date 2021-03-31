import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'
import { useRouter } from '../../hooks/useRouter'

export const PageTransition = ({ children, ...props }) => {
  const router = useRouter()

  const transitions = useTransition(router, router => router.pathname, {
    from: { transform: 'translate3d(100vw, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100vw, 0, 0)' },
    config: config.wobbly

    // from: { transform: 'translateY(-2000px)' },
    // enter: { transform: 'translateY(0)' },
    // leave: { transform: 'translateY(200px)' },
    // config: config.stiff
  })

  return (
    <>
      {transitions.map(({ item, props: style, key }) => {
        if (!item.components) {
          return null
        }

        const { Component, props } = item.components[item.pathname]

        return (
          <Page key={key} style={style}>
            {children(
              item ? { Component, pageProps: props && props.pageProps } : {}
            )}
          </Page>
        )
      })}
    </>
  )
}

const Page = styled(animated.main)`
  min-height: 100%;
  height: 100%;
`
