//React
import React, { useState } from 'react'

//Libs
import { TextField, IconButton, InputAdornment } from '@mui/material'

//Icons
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function InputField({
  width,
  height,
  id,
  type,
  label,
  onChange,
  value,
  disabled = false,
  variant,
  color,
  name,
  length,
  fullWidth,
  multiline,
  fontSize,
}) {
  const isPassword = type === 'password'
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      disabled={disabled}
      type={isPassword && showPassword ? 'text' : type}
      name={name}
      onChange={onChange}
      value={value}
      fullWidth={fullWidth}
      multiline={multiline}
      InputProps={{
        ...(isPassword && {
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton edge='end' onClick={handleTogglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }),
        sx: {
          width,
          height,
          fontSize,
          color,
        },
      }}
      inputProps={{
        form: {
          autoComplete: 'off',
        },
        maxLength: length || 'none',
      }}
      InputLabelProps={{
        sx: {
          fontSize: '20px',
          color,
          fontFamily: 'Open Sans, sans-serif',
        },
      }}
    />
  )
}
