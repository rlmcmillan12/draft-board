import styled from 'styled-components'
import DisplayCard from '../components/DisplayCard'
import { useGetDraftsQuery } from '../redux/services/drafts'

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  min-height: 100vh;
`

function About() {
  const { data } = useGetDraftsQuery()
  if (!data) return null
  return (
    // TODO: Edit About page
    <AboutContainer>
      {data?.map((draft, i) => (
        <DisplayCard key={i} draft={draft} />
      ))}
    </AboutContainer>
  )
}

export default About
