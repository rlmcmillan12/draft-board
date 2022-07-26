import React, { useState } from 'react'
import styled from 'styled-components'
import { useGetBeersQuery, useUpdateBeerMutation } from '../redux/services/beers'

const Container = styled.div`
  border: 2px solid black;
  margin-top: 8px;
  padding-left: 8px;
  padding-bottom: 30px;
  & table {
    width: 100%;
    text-align: center;
  }
  & form div {
    margin: 5px;
  }
  & td {
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
`

function DraftBoardUpdateBeer() {
  const [updateBeer] = useUpdateBeerMutation()
  const { data } = useGetBeersQuery()
  const [currentId, setCurrentId] = useState('')
  const [currentBeer, setCurrentBeer] = useState('')

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
  const handleChange = (e) => {
    const beer = data.find((b) => b.id === Number(e.target.value))
    setCurrentBeer(beer)
    setCurrentId(beer.id)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    updateBeer({ id: Number(currentId), updatedBeer: form })
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
  if (!data) return null
  return (
    <Container>
      <h3>Edit Beer from Database</h3>
      <div>
        <label htmlFor="id">Beer to change: </label>
        <select name="id" id="id" form="beerEdit" onChange={handleChange}>
          <option value=""></option>
          {data.map((beer, i) => (
            <option key={i} value={beer.id}>
              {beer.name}
            </option>
          ))}
        </select>
      </div>
      <form id="beerEdit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="style">Style: </label>
          <input
            type="text"
            name="style"
            id="style"
            value={form.style}
            onChange={(e) => updateField('style', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="abv">ABV: </label>
          <input
            type="number"
            step=".1"
            min="0"
            id="abv"
            name="abv"
            value={form.abv}
            onChange={(e) => updateField('abv', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ibu">IBU: </label>
          <input
            type="number"
            min="0"
            id="ibu"
            name="ibu"
            value={form.ibu}
            onChange={(e) => updateField('ibu', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <input
            type="number"
            max="40"
            min="0"
            step=".1"
            id="color"
            name="color"
            value={form.color}
            onChange={(e) => updateField('color', e.target.value)}
          />
        </div>
        <button type="submit">Edit Beer</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Style</th>
            <th>ABV</th>
            <th>IBU</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentBeer.name}</td>
            <td>{currentBeer.style}</td>
            <td>{currentBeer.abv}</td>
            <td>{currentBeer.ibu}</td>
            <td>{currentBeer.color}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default DraftBoardUpdateBeer
