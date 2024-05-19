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

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: #1c3286;

  ${({ containerHeight }) => {
    return responsiveProp(
      containerHeight,
      (breakpoint) => css`
        height: ${containerHeight[breakpoint.name]}vh;
      `
    )
  }}
`

export const ContainerMenuLogo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  ${({ containerWidth }) => {
    return responsiveProp(
      containerWidth,
      (breakpoint) => css`
        width: ${containerWidth[breakpoint.name]}%;
      `
    )
  }}
`

export const ContainerLogo = styled.img`
  width: 100px;
  height: 100px;

  ${({ size }) => {
    return responsiveProp(
      size,
      (breakpoint) => css`
        width: ${size[breakpoint.name]}px;
        height: ${size[breakpoint.name]}px;
      `
    )
  }}

  ${({ display }) => {
    return responsiveProp(
      display,
      (breakpoint) => css`
        display: ${display[breakpoint.name]};
      `
    )
  }}
`

export const ContainerLogoMobile = styled.img`
  display: none;
  width: 60px;
  height: 60px;

  ${({ display }) => {
    return responsiveProp(
      display,
      (breakpoint) => css`
        display: ${display[breakpoint.name]};
      `
    )
  }}
`

export const TitleHeader = styled.h2`
  color: #ffffff;
  font-family: Open Sans, sans-serif;
  font-weight: 800;
  font-size: 22px;
  text-transform: uppercase;

  ${({ fontSize }) => {
    return responsiveProp(
      fontSize,
      (breakpoint) => css`
        font-size: ${fontSize[breakpoint.name]}px;
      `
    )
  }}

  ${({ display }) => {
    return responsiveProp(
      display,
      (breakpoint) => css`
        display: ${display[breakpoint.name]};
      `
    )
  }}
`

export const ContainerMenuList = styled.div`
  width: 250px;
  height: 100%;
  background-color: #FFCF00;

  ${({ containerWidth }) => {
    return responsiveProp(
      containerWidth,
      (breakpoint) => css`
        width: ${containerWidth[breakpoint.name]}%;
      `
    )
  }}
`
