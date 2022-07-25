import React from 'react'
import styled from 'styled-components'
import DisplayCard from '../components/DisplayCard'
import { useGetDraftsQuery } from '../redux/services/drafts'

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 100vh;
  align-items: center;
`

function Display() {
  const { data } = useGetDraftsQuery()
  if (!data) return null
  return (
    <DisplayContainer>
      {data.map((draft, i) => (
        <DisplayCard key={i} draft={draft} />
      ))}
    </DisplayContainer>
  )
}

export default Display
