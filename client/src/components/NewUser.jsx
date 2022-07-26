import React, { useState } from 'react'
import styled from 'styled-components'
import { useNewUserMutation } from '../redux/services/user'
const NewUserContainer = styled.div`
  border: 2px solid black;
  margin-top: 8px;
  padding-left: 8px;
  padding-bottom: 30px;
  & form div {
    margin: 5px;
  }
  & button {
    margin: auto;
  }
`

function NewUser() {
  const [createNewUser] = useNewUserMutation()
  const [form, setForm] = useState({
    username: '',
    password: '',
    admin: 'user',
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createNewUser(form)
    setForm({
      username: '',
      password: '',
      admin: 'user',
    })
  }
  return (
    <NewUserContainer>
      <h3>Add New User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Enter Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={(e) => updateField('username', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Enter Password: </label>
          <input
            type="text"
            name="password"
            id="password"
            value={form.password}
            onChange={(e) => updateField('password', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="admin">Select profile type: </label>
          <select name="admin" id="admin" onChange={(e) => updateField('admin', e.target.value)}>
            <option value="user">User</option>
            <option value="manager">Manager</option>
            <option value="admin">Administrator</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </NewUserContainer>
  )
}

export default NewUser
