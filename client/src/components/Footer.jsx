import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useGetCurrentUserQuery } from '../redux/services/user'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-image: url(./navBackground.jpg);
  background-position-y: 95%;
  color: #ffffffaf;
  font-weight: 600;
`
const FooterDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 10px;
`
const LoginDiv = styled.div`
  & a {
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: #ffffffaf;
  }
  & a:hover {
    color: black;
  }
`

function Footer() {
  const { data: user } = useGetCurrentUserQuery()

  if (user) {
    return (
      <FooterContainer>
        <FooterDiv>
          <span>{`Terms & Conditions`}</span>
          <span>Privacy Policy</span>
        </FooterDiv>
      </FooterContainer>
    )
  }

  return (
    <FooterContainer>
      <FooterDiv>
        <span>{`Terms & Conditions`}</span>
        <span>Privacy Policy</span>
      </FooterDiv>
      <LoginDiv>
        <Link to={'/login'}>Login</Link>
      </LoginDiv>
    </FooterContainer>
  )
}

export default Footer
