import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useGetDraftsQuery } from '../redux/services/drafts'
import { useGetCurrentUserQuery } from '../redux/services/user'
import DraftBoardEditDraft from '../components/DraftBoardEditDraft'
import DraftBoardUpdateBeer from '../components/DraftBoardUpdateBeer'
import DraftBoardAddBeer from '../components/DraftBoardAddBeer'
import NewUser from '../components/NewUser'
import Chromecast from '../components/Chromecast'
import PrimaryNav from '../components/PrimaryNav'
import Footer from '../components/Footer'

const DBContainer = styled.div`
  padding: 15px;
  width: 100vw;
`
const Table = styled.table`
  width: 100%;
`
const TR = styled.tr`
  & th:last-child {
    background-color: ${(props) => props.srmHex};
  }
`

function DraftBoard() {
  const { data, isLoading, isError } = useGetDraftsQuery()
  const { data: user } = useGetCurrentUserQuery()

  if (isLoading || isError) return null
  return (
    <DBContainer>
      <PrimaryNav />
      <h1>Hello {user.username}</h1>
      <h3>What's on draft?</h3>
      <Table>
        <thead>
          <TR>
            <th>Tap #</th>
            <th>Name</th>
            <th>Style</th>
            <th>ABV</th>
            <th>IBU</th>
            <th>Color</th>
          </TR>
        </thead>
        <tbody>
          {data.map((draft, i) => (
            <TR key={i}>
              <td>{i + 1}</td>
              <td>{draft.name}</td>
              <td>{draft.style}</td>
              <td>{draft.abv}</td>
              <td>{draft.ibu}</td>
              <td>{draft.color}</td>
            </TR>
          ))}
        </tbody>
      </Table>
      <Chromecast />
      <DraftBoardEditDraft />
      {user.admin === 'manager' && (
        <>
          <DraftBoardUpdateBeer />
          <DraftBoardAddBeer />
        </>
      )}
      {user.admin === 'admin' && (
        <>
          <DraftBoardAddBeer />
          <DraftBoardUpdateBeer />
          <NewUser />
        </>
      )}
      <Link to="/display">Display</Link>
      <Footer />
    </DBContainer>
  )
}

export default DraftBoard
