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
  margin-top: 8px;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`
const FooterContainer = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  bottom: 0px;
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
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  )
}

export default Drafts
