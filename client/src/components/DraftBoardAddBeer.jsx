import React, { useState } from 'react'
import styled from 'styled-components'
import { useAddNewBeerMutation } from '../redux/services/beers'
const DBFContainer = styled.div`
  border: 2px solid black;
  margin-top: 8px;
  padding-left: 8px;
  padding-bottom: 30px;
  & form div {
    margin: 5px;
  }
`

function DraftBoardAddBeer() {
  const [addBeer] = useAddNewBeerMutation()
  const [form, setForm] = useState({
    name: '',
    style: '',
    abv: '',
    ibu: '',
    color: '',
  })
  const updateField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addBeer(form)
      .unwrap()
      .then(() => {
        setForm({
          name: '',
          style: '',
          abv: '',
          ibu: '',
          color: '',
        })
      })
  }
  return (
    <DBFContainer>
      <h3>Add Beer to Database</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="style">Style: </label>
          <input
            type="text"
            name="style"
            value={form.style}
            onChange={(e) => updateField('style', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="abv">ABV: </label>
          <input
            type="number"
            step=".1"
            min=".0"
            name="abv"
            value={form.abv}
            onChange={(e) => updateField('abv', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ibu">IBU: </label>
          <input
            type="number"
            name="ibu"
            value={form.ibu}
            onChange={(e) => updateField('ibu', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <input
            type="number"
            max="40"
            min="1"
            step=".1"
            name="color"
            value={form.color}
            onChange={(e) => updateField('color', e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Beer</button>
      </form>
    </DBFContainer>
  )
}

export default DraftBoardAddBeer
