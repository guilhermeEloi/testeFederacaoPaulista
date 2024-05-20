// React
import React from 'react'

//Libs
import { CardContent, Typography, Divider, CardActions } from '@mui/material'

//Components
import ButtonComponent from '../../../components/Button'

//Styles
import { PersonCardContainer, PersonCardHeader, PersonImage } from './styles'

export default function PersonCard({
  photo,
  name,
  age,
  cpf,
  email,
  phone,
  address,
  birthDate,
  status,
  onViewDetails,
}) {
  return (
    <PersonCardContainer container={{ md: 90, lg: 95 }}>
      <PersonCardHeader>
        <PersonImage src={photo} alt={`${name} - Foto de perfil`} />
        <Typography variant='h4' marginLeft={2}>{name}</Typography>
      </PersonCardHeader>
      <CardContent>
        <Typography variant='body2' margin={1}>Idade: {age}</Typography>
        <Typography variant='body2' margin={1}>CPF: {cpf}</Typography>
        <Typography variant='body2' margin={1}>E-mail: {email}</Typography>
        <Typography variant='body2' margin={1}>Telefone: {phone}</Typography>
        <Typography variant='body2' margin={1}>Endereço: {address}</Typography>
        <Typography variant='body2' margin={1}>Data de nascimento: {birthDate}</Typography>
        <Typography variant='body2' margin={1}>Status: {status}</Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'end' }}>
        <ButtonComponent
          title={'MAIS INFORMAÇÕES'}
          fontSize={16}
          variant={'contained'}
          onClick={onViewDetails}
          size={'small'}
          backgroundColor={'#1c3286'}
        />
      </CardActions>
    </PersonCardContainer>
  )
}
