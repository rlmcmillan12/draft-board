import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useLoginMutation } from '../redux/services/user'

const LoginFormContainer = styled.div``

function LoginForm() {
  const navigate = useNavigate()
  const [login] = useLoginMutation()
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    login(form)
      .unwrap()
      .then(() => {
        navigate('/draftboard')
      })
  }
  return (
    <LoginFormContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          value={form.username}
          onChange={(e) => updateField('username', e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          required
          value={form.password}
          onChange={(e) => updateField('password', e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </LoginFormContainer>
  )
}

export default LoginForm
