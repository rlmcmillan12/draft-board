import React, { useState } from 'react'
import styled from 'styled-components'
import { useUpdateDraftMutation } from '../redux/services/drafts'
import { useGetBeersQuery } from '../redux/services/beers'

const DBEContainer = styled.div``

function DraftBoardEditDraft() {
  const { data } = useGetBeersQuery()
  const [updateDraft] = useUpdateDraftMutation()
  const [tap, setTap] = useState('1')
  const [form, setForm] = useState({
    name: '',
    style: '',
    abv: '',
    ibu: '',
    color: '',
  })

  const handleChange = (e) => {
    const beer = data.find((b) => b.id === Number(e.target.value))
    setForm(beer)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateDraft({ id: tap, updateDraft: form })
  }
  if (!data) return null
  return (
    <DBEContainer>
      <h3>Edit Drafts</h3>
      <div>
        <label htmlFor="tap">Tap to change:</label>
        <select name="tap" id="tap" form="draftEdit" onChange={(e) => setTap(e.target.value)}>
          <option value={'1'}>1</option>
          <option value={'2'}>2</option>
          <option value={'3'}>3</option>
          <option value={'4'}>4</option>
          <option value={'5'}>5</option>
          <option value={'6'}>6</option>
          <option value={'7'}>7</option>
          <option value={'8'}>8</option>
          <option value={'9'}>9</option>
          <option value={'10'}>10</option>
          <option value={'11'}>11</option>
          <option value={'12'}>12</option>
          <option value={'13'}>13</option>
          <option value={'14'}>14</option>
          <option value={'15'}>15</option>
          <option value={'16'}>16</option>
        </select>
        <label htmlFor="id">Which beer?</label>
        <select name="id" id="id" onChange={handleChange}>
          {data.map((beer, i) => (
            <option key={i} value={beer.id}>
              {beer.name}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>update draft</button>
      </div>
    </DBEContainer>
  )
}

export default DraftBoardEditDraft
