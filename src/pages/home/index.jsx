import React from 'react'

import {
  Container,
  ContainerBody,
} from './styles'

export default function Home() {
  
  return (
    <Container>
      <ContainerBody container={{ sm: 'auto', xs: 'auto' }}>
        <p>Home</p>
      </ContainerBody>
    </Container>
  )
}
