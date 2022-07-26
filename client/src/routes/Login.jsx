import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'

const LoginContainer = styled.div`
  height: 100vh;
`

function Login() {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  )
}

export default Login
