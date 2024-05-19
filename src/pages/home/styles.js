import styled, { css } from 'styled-components'
import { breakpoints } from '../../styles/responsive'

function responsiveProp(prop, callback) {
  if (prop) {
    return breakpoints.map((breakpoint) => {
      if (prop[breakpoint.name]) {
        return css`
          @media (max-width: ${breakpoint.media}px) {
            ${callback(breakpoint)}
          }
        `
      }
    })
  }
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: #F0F0F0;
`

export const ContainerBody = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: baseline;

  ${({ container }) => {
    return responsiveProp(
      container,
      (breakpoint) => css`
        flex-direction: column;
        height: ${container[breakpoint.name]};
      `
    )
  }}
`
