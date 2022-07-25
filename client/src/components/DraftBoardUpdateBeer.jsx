import React, { useState } from 'react'
import styled from 'styled-components'
import { useGetBeersQuery, useUpdateBeerMutation } from '../redux/services/beers'

const Container = styled.div``

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
      <h3>Edit beer from database</h3>
      <select name="id" id="id" form="beerEdit" onChange={handleChange}>
        {data.map((beer, i) => (
          <option key={i} value={beer.id}>
            {beer.name}
          </option>
        ))}
      </select>
      <form id="beerEdit" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={(e) => updateField('name', e.target.value)}
        />
        <label htmlFor="style">Style</label>
        <input
          type="text"
          name="style"
          id="style"
          value={form.style}
          onChange={(e) => updateField('style', e.target.value)}
        />
        <label htmlFor="abv">ABV</label>
        <input
          type="number"
          step=".1"
          min="0"
          id="abv"
          name="abv"
          value={form.abv}
          onChange={(e) => updateField('abv', e.target.value)}
        />
        <label htmlFor="ibu">IBU</label>
        <input
          type="number"
          min="0"
          id="ibu"
          name="ibu"
          value={form.ibu}
          onChange={(e) => updateField('ibu', e.target.value)}
        />
        <label htmlFor="color">Color</label>
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
        <button type="submit">Submit</button>
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
