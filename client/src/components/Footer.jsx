import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useGetCurrentUserQuery } from '../redux/services/user'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 8px;
`
const FooterDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
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
      <div>
        <span>{`Terms & Conditions`}</span>
        <span>Privacy Policy</span>
      </div>
      <div>
        <Link to={'/login'}>Login</Link>
      </div>
    </FooterContainer>
  )
}

export default Footer
