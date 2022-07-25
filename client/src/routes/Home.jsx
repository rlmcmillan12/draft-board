import styled from 'styled-components'

const HomeContainer = styled.div``
function Home() {
  return (
    <HomeContainer>
      <h1>All Lager Brewing</h1>
      <p>
        All Lager Brewing is a cozy quaint brewery made up in your own head. Imagine an ornate dark wood bar with a
        beautiful polished brewhouse to the side, and a friendly beertender pouring a frothy mug of lager.
      </p>
      <p>
        All Lager Brewing is committed to placing imagery in your mind of the most glorious mug of suds in the most
        beautiful taproom.
      </p>
      <h2>Taproom</h2>
      <div>
        <div>
          <h3>Hours</h3>
          <span>Mon - Thurs 3-11</span>
          <span>{`Fri & Sat 12-12`}</span>
          <span>Sun 12-10</span>
          <h3>Location</h3>
          <span>5011 Brain Way</span>
          <span>Imaginary, USA 50111</span>
          <span>623.387.6867</span>
        </div>
        <div>Map</div>
      </div>
    </HomeContainer>
  )
}

export default Home
