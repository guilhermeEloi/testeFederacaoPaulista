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
  background-color: #f0f0f0;
`

export const ContainerBody = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ container }) => {
    return responsiveProp(
      container,
      (breakpoint) => css`
        height: ${container[breakpoint.name]};
      `
    )
  }}
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`

export const TitlePage = styled.h2`
  color: #000000;
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  font-size: 24px;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  background-color: #c0c0c0;
  overflow-y: auto;
`
export const ContainerFooter = styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  background-color: #1c3286;
`
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  overflow-y: auto;
`