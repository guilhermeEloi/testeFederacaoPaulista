//React
import React from 'react'

//Components
import Header from '../../components/Header'

//Styles
import {
  Container,
  ContainerBody,
} from './styles'


export default function Home() {
  
  return (
    <Container>
      <Header />
      <ContainerBody container={{ sm: 'auto', xs: 'auto' }}>
        <p>Home</p>
      </ContainerBody>
    </Container>
  )
}
