import styled from 'styled-components'
import Footer from '../components/Footer'
import PrimaryNav from '../components/PrimaryNav'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 75%;
  & h2 {
  }
  & p {
    margin-left: 15px;
    margin-right: 15px;
    line-height: 1.3em;
  }
  & span {
    margin-bottom: 2px;
  }
  & h2 {
    text-align: left;
  }
`
const DetailsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`
const Details = styled.div``
const Location = styled.div`
  display: flex;
  flex-direction: column;
`

const Hours = styled.div`
  display: flex;
  flex-direction: column;
`
const Map = styled.div`
  display: flex;
  flex-direction: column;
  & iframe {
    width: 250px;
    height: 250px;
    border: none;
  }
`

function Home() {
  return (
    <>
      <PrimaryNav />
      <HomeContainer>
        <p>
          &emsp; All Lager Brewing is a cozy quaint brewery made up in your own head. Imagine an ornate dark wood bar
          with a beautiful polished brewhouse to the side, and a friendly beertender pouring a frothy mug of lager.
        </p>
        <p>
          &emsp; All Lager Brewing is committed to placing imagery in your mind of the most glorious mug of suds in the
          most beautiful taproom. If you would like to login to check out the draft board features click the login link
          in the footer. username: user and password: user
        </p>
        <h2>Taproom</h2>
        <DetailsDiv>
          <Details>
            <Hours>
              <h3>Hours</h3>
              <span>Mon - Thurs 3-11</span>
              <span>{`Fri & Sat 12-12`}</span>
              <span>Sun 12-10</span>
            </Hours>
            <Location>
              <h3>Location</h3>
              <span>5011 Brain Way</span>
              <span>Imaginary, USA 50111</span>
              <span>623.387.6867</span>
            </Location>
          </Details>
          <Map>
            <h3>Map</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206961.29041705132!2d-84.18741508027487!3d35.85463890179593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c269d5c36f415%3A0x6d743240a88765be!2sFort%20Loudoun%20Lake!5e0!3m2!1sen!2sus!4v1658829218463!5m2!1sen!2sus"
              width="600"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Map>
        </DetailsDiv>
      </HomeContainer>
      <Footer />
    </>
  )
}

export default Home
