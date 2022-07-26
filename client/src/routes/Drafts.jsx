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
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`

function Drafts() {
  const { data } = useGetDraftsQuery()
  if (!data) return null
  return (
    <>
      <PrimaryNav />
      <AboutContainer>
        {data?.map((draft, i) => (
          <DisplayCard key={i} draft={draft} />
        ))}
      </AboutContainer>
      <Footer />
    </>
  )
}

export default Drafts
