import React from 'react'
import styled from 'styled-components'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
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
  text-align: center;
`
const TR = styled.tr`
  border-bottom: 1px solid black;
  & th {
    border-bottom: 1px solid black;
  }
  & td {
    border-right: 1px solid #00000077;
    border-bottom: 1px solid #00000077;
    padding: 3px;
  }
  & td:last-child {
    background-color: ${(props) => props.srmHex};
  }
`

function DraftBoard() {
  const { data, isLoading, isError } = useGetDraftsQuery()
  const { data: user } = useGetCurrentUserQuery()

  if (isLoading || isError) return null
  return (
    <>
      <PrimaryNav />
      <DBContainer>
        <h1>Hello, {user.username}</h1>
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

        {user.admin === 'user' && (
          <>
            <Tabs>
              <TabList>
                <Tab mx={10}>Update Draft Board</Tab>
              </TabList>
              <TabPanels>
                <DraftBoardEditDraft />
              </TabPanels>
            </Tabs>
          </>
        )}
        {user.admin === 'manager' && (
          <>
            <Tabs>
              <TabList>
                <Tab mx={10}>Update Draft Board</Tab>
                <Tab mx={10}>Add Beer to Database</Tab>
                <Tab mx={10}>Update Beer from Database</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <DraftBoardEditDraft />
                </TabPanel>
                <TabPanel>
                  <DraftBoardAddBeer />
                </TabPanel>
                <TabPanel>
                  <DraftBoardUpdateBeer />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        )}
        {user.admin === 'admin' && (
          <>
            <Tabs>
              <TabList>
                <Tab mx={10}>Update Draft Board</Tab>
                <Tab mx={10}>Add Beer to Database</Tab>
                <Tab mx={10}>Update Beer from Database</Tab>
                <Tab mx={10}>Add New User</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <DraftBoardEditDraft />
                </TabPanel>
                <TabPanel>
                  <DraftBoardAddBeer />
                </TabPanel>
                <TabPanel>
                  <DraftBoardUpdateBeer />
                </TabPanel>
                <TabPanel>
                  <NewUser />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </>
        )}
      </DBContainer>
      <Footer />
    </>
  )
}

export default DraftBoard
