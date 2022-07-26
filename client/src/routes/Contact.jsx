import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import PrimaryNav from '../components/PrimaryNav'

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 15px;
  & h1 {
    text-align: center;
  }
`

function Contact() {
  return (
    <>
      <PrimaryNav />
      <ContactContainer>
        <h1>Contact</h1>
        <p>&emsp;This is not a real business and there is nobody to contact about it</p>
        <p>
          &emsp;However if you like this design and would like to implement a web site/ draft board combination shoot an
          email to rlmcmillan12@gmail.com
        </p>
      </ContactContainer>
      <Footer />
    </>
  )
}

export default Contact
