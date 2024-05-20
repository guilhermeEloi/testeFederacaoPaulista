//React
import React, { useState } from 'react'

//Compoents
import Header from '../../components/Header'
import PersonCard from './PersonCard'
import ButtonComponent from '../../components/Button'

//Icons
import AddIcon from '@mui/icons-material/Add'

//Mocks
import { people } from '../../mocks/people'

//Styles
import {
  Container,
  ContainerBody,
  HeaderContainer,
  TitlePage,
  CardsContainer,
  ContainerFooter,
} from './styles'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSave = () => {
    alert('Dados Salvos')
    setIsModalOpen(false)
  }

  return (
    <Container>
      <Header />
      <ContainerBody container={{ sm: 'auto', xs: 'auto' }}>
        <HeaderContainer>
          <TitlePage>Ficha de Pessoas</TitlePage>
          <ButtonComponent
            title={'ADICIONAR'}
            fontSize={18}
            variant={'contained'}
            onClick={openModal}
            size={'large'}
            backgroundColor={'#1c3286'}
            endIcon={<AddIcon sx={{ color: '#FFFFFF' }} />}
          />
        </HeaderContainer>
        <CardsContainer>
          {people.map((person, index) => (
            <PersonCard key={index} {...person} />
          ))}
        </CardsContainer>
      </ContainerBody>
      <ContainerFooter />
      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Formulário de Cadastro</DialogTitle>
        <DialogContent>{/* Formulário de cadastro aqui */}</DialogContent>
        <DialogActions>
          <ButtonComponent
            title={'CANCELAR'}
            fontSize={16}
            variant={'contained'}
            onClick={closeModal}
            size={'small'}
            color={'error'}
          />
          <ButtonComponent
            title={'SALVAR'}
            fontSize={16}
            variant={'contained'}
            onClick={handleSave}
            size={'small'}
            backgroundColor={'#1c3286'}
          />
        </DialogActions>
      </Dialog>
    </Container>
  )
}
