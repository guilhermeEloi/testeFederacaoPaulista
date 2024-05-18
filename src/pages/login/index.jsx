//React
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Components
import InputField from '../../components/InputField'
import ButtonComponent from '../../components/Button'

//Assets
import ImgLogo from '../../assets/logoFPF.png'

//Styles
import {
  Container,
  ContainerBody,
  ContainerContentLogin,
  ContainerContentLoginLogoLabel,
  ContainerLogo,
  TitleContentBodyFields,
  ContainerInputs,
  ContainerContentLoginButtonAction,
} from './styles'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  /*
    System login function, at this moment only a simple user validation is being carried out, to access the system the email and password is admin
  */
  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Atenção, preencha os campos!')
    }
    if (email && password === 'admin') {
      navigate('/home')
    } else {
      alert('Atenção, email e/ou senha incorreta!')
    }
  }

  return (
    <Container>
      <ContainerBody container={{ sm: '100vh', xs: '100vh' }}>
        <ContainerContentLogin
          sizes={{
            xs: { width: 80, height: 50 },
            sm: { width: 50, height: 50 },
            md: { width: 50, height: 50 },
            lg: { width: 30, height: 50 },
          }}
        >
          <ContainerContentLoginLogoLabel>
            <ContainerLogo
              src={ImgLogo}
              sizes={{
                xs: { width: 80, height: 80 },
                sm: { width: 80, height: 80 },
                md: { width: 80, height: 80 },
              }}
            />
            <TitleContentBodyFields>Faça o seu login</TitleContentBodyFields>
          </ContainerContentLoginLogoLabel>
          <ContainerInputs>
            <InputField
              id='email'
              label='E-MAIL'
              variant='outlined'
              color='#928E8E'
              fullWidth
              height={50}
              fontSize={'18px'}
              type={'text'}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <InputField
              id='pass'
              label='SENHA'
              variant='outlined'
              color='#928E8E'
              fullWidth
              height={50}
              fontSize={'18px'}
              type={'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </ContainerInputs>
          <ContainerContentLoginButtonAction>
            <ButtonComponent
              title={'ENTRAR'}
              fontSize={18}
              variant={'contained'}
              onClick={handleLogin}
              size={'large'}
            />
          </ContainerContentLoginButtonAction>
        </ContainerContentLogin>
      </ContainerBody>
    </Container>
  )
}
