//React
import React, { useState } from 'react'

//Components
import Header from '../../components/Header'
import PersonCard from './PersonCard'
import ButtonComponent from '../../components/Button'
import InputField from '../../components/InputField'

//Material-UI Components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Avatar,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material'

//Icons
import AddIcon from '@mui/icons-material/Add'

//Mocks
import { people } from '../../mocks/people'

import { MaskPhone, MaskBirthday } from '../../utils/masks'

//Styles
import {
  Container,
  ContainerBody,
  HeaderContainer,
  TitlePage,
  CardsContainer,
  ContainerFooter,
  ContainerInputs,
} from './styles'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [avatarImage, setAvatarImage] = useState(
    'https://via.placeholder.com/100'
  )
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')

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

  const handleAvatarChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
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
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        PaperProps={{ sx: { width: '50%' } }}
      >
        <DialogTitle>Formulário de Cadastro</DialogTitle>
        <DialogContent>
          <label htmlFor='avatarInput'>
            <Avatar
              alt='Avatar'
              src={avatarImage}
              sx={{
                width: 100,
                height: 100,
                marginBottom: 2,
                cursor: 'pointer',
              }}
            />
          </label>
          <input
            type='file'
            accept='image/*'
            id='avatarInput'
            style={{ display: 'none' }}
            onChange={handleAvatarChange}
          />
          <ContainerInputs>
            <FormControl sx={{ width: '90%', marginBottom: '16px' }}>
              <InputField
                id='name'
                label='NOME'
                variant='filled'
                color='#928E8E'
                fullWidth
                height={50}
                fontSize={'18px'}
                type={'text'}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormControl>
            <FormControl sx={{ width: '90%', marginBottom: '16px' }}>
              <InputField
                id='address'
                label='ENDEREÇO'
                variant='filled'
                color='#928E8E'
                fullWidth
                height={50}
                fontSize={'18px'}
                type={'text'}
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </FormControl>
            <FormControl sx={{ width: '90%', marginBottom: '16px' }}>
              <InputField
                id='email'
                label='E-MAIL'
                variant='filled'
                color='#928E8E'
                fullWidth
                height={50}
                fontSize={'18px'}
                type={'text'}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
            <FormControl sx={{ width: '90%', marginBottom: '16px' }}>
              <InputField
                id='phone'
                label='TELEFONE'
                variant='filled'
                color='#928E8E'
                fullWidth
                height={50}
                fontSize={'18px'}
                type={'text'}
                value={phone}
                onChange={(event) => setPhone(MaskPhone(event.target.value))}
              />
            </FormControl>
            <FormControl sx={{ width: '90%', marginBottom: '16px' }}>
              <InputField
                id='birthday'
                label='DATA DE NASCIMENTO'
                variant='filled'
                color='#928E8E'
                fullWidth
                height={50}
                fontSize={'18px'}
                type={'text'}
                value={birthday}
                onChange={(event) => setBirthday(MaskBirthday(event.target.value))}
              />
            </FormControl>
            <FormControl sx={{ width: '90%', marginBottom: '16px' }}>
              <InputLabel>GÊNERO</InputLabel>
              <Select
                id='gender'
                value={gender}
                label='GÊNERO'
                onChange={(event) => setGender(event.target.value)}
              >
                <MenuItem value={'F'}>Masculino</MenuItem>
                <MenuItem value={'M'}>Feminino</MenuItem>
              </Select>
            </FormControl>
          </ContainerInputs>
        </DialogContent>
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
