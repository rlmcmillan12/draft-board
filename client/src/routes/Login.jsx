import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import PrimaryNav from '../components/PrimaryNav'

const LoginContainer = styled.div`
  height: 100vh;
`

function Login() {
  return (
    <>
      <PrimaryNav />
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
      <Footer />
    </>
  )
}

export default Login
