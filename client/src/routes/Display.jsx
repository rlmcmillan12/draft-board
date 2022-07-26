import React from 'react'
import styled from 'styled-components'
import DisplayCard from '../components/DisplayCard'
import { useGetDraftsQuery } from '../redux/services/drafts'

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
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
