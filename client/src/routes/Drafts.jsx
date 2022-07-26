import styled from 'styled-components'
import DisplayCard from '../components/DisplayCard'
import Footer from '../components/Footer'
import PrimaryNav from '../components/PrimaryNav'
import { useGetDraftsQuery } from '../redux/services/drafts'

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  min-height: 100vh;
`

function Drafts() {
  const { data } = useGetDraftsQuery()
  if (!data) return null
  return (
    <AboutContainer>
      <PrimaryNav />
      {data?.map((draft, i) => (
        <DisplayCard key={i} draft={draft} />
      ))}
      <Footer />
    </AboutContainer>
  )
}

export default Drafts
