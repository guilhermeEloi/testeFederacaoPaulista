import styled, { css } from 'styled-components'
import { breakpoints } from '../../styles/responsive'

function responsiveProp(prop, callback) {
  if (prop) {
    return breakpoints.map((breakpoint) => {
      if (prop[breakpoint.name]) {
        return css`
          @media (max-width: ${breakpoint.media}px) {
            ${callback(breakpoint, prop[breakpoint.name])}
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
  background-color: #1C3286;
`

export const ContainerBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const ContainerContentLogin = styled.div`
  display: flex;
  width: 30%;
  height: 40%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #f0f0f0;
  border-radius: 10px;

  ${({ sizes }) => {
    return responsiveProp(
      sizes,
      (breakpoint, size) => css`
        width: ${size.width}%;
        height: ${size.height}%;
      `
    )
  }}
`

export const ContainerContentLoginLogoLabel = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const ContainerLogo = styled.img`
  width: 110px;
  height: 120px;

  ${({ sizes }) => {
    return responsiveProp(
      sizes,
      (breakpoint, size) => css`
        width: ${size.width}px;
        height: ${size.height}px;
      `
    )
  }}
`

export const TitleContentBodyFields = styled.h3`
  color: #000;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 18px;
`

export const ContainerInputs = styled.div`
  display: flex;
  width: 90%;
  height: 40%;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ContainerContentLoginButtonAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
`
