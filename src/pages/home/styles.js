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
`

export const ContainerBody = styled.div`
  width: 100vw;
  height: 70vh;
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

// export const ContainerContentBodyOpacity = styled.div`
//   width: 100%;
//   height: 80%;
//   background-color: rgba(34, 35, 36, 0.4);
//   margin-top: 10vh;
//   display: flex;
//   flex-direction: column;
// `
