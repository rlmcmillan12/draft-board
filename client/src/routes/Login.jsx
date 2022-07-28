import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import PrimaryNav from '../components/PrimaryNav'
import { useEffect } from 'react'

const LoginContainer = styled.div`
  height: 100vh;
`

function Login() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
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
