import styled, { css } from 'styled-components'
import { breakpoints } from '../../../styles/responsive'
import { Card } from '@mui/material'

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

export const PersonCardContainer = styled(Card)`
  width: 100%;
  height: 70%;
  max-width: 400px;
  margin: 16px;

  ${({ container }) => {
    return responsiveProp(
      container,
      (breakpoint) => css`
        height: ${container[breakpoint.name]}%;
      `
    )
  }}
`

export const PersonCardHeader = styled.div`
  display: flex;
  width: 100%;
  height: 35%;
  justify-content: start;
  align-items: center;
`

export const PersonImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`