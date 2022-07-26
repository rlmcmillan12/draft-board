import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useGetCurrentUserQuery, useLogoutMutation } from '../redux/services/user'

const PrimaryNavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  background-image: url(./navBackground.jpg);
  background-position: center;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1.5px solid #000000c4;
  & a {
    text-decoration: none;
    color: black;
  }
  & a:hover {
    color: red;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`
const LinkDiv = styled.div`
  width: 33%;
  display: flex;
  justify-content: space-around;
  align-self: flex-end;
  padding-bottom: 15px;
  @media (max-width: 720px) {
    width: 100%;
    align-items: center;
    margin-top: 15px;
  }
`
const LogoDiv = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`
const LogoImage = styled.img`
  width: 280px;
`
const BlankDiv = styled.div`
  width: 33%;
`
const UserDiv = styled.div`
  width: 33%;
  display: flex;
  justify-content: space-around;
  align-self: flex-end;
  padding-bottom: 15px;
  @media (max-width: 720px) {
    width: 100%;
    align-items: center;
  }
`
const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 1em;
  font-family: 'Source Sans Pro', sans-serif;
  &:hover {
    color: red;
  }
`

function PrimaryNav() {
  const { data } = useGetCurrentUserQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout().then(() => navigate('/'))
  }

  if (!data) {
    return (
      <PrimaryNavContainer>
        <LinkDiv>
          <Link to="/">Home</Link>
          <Link to="/drafts">Drafts</Link>
          <Link to="/contact">Contact</Link>
        </LinkDiv>
        <LogoDiv>
          <LogoImage src="./allLagerLogo.png" alt="all lager brewing logo" />
        </LogoDiv>
        <BlankDiv></BlankDiv>
      </PrimaryNavContainer>
    )
  }
  if (data) {
    return (
      <PrimaryNavContainer>
        <LinkDiv>
          <Link to="/">Home</Link>
          <Link to="/drafts">Drafts</Link>
          <Link to="/contact">Contact</Link>
        </LinkDiv>
        <LogoDiv>
          <LogoImage src="./allLagerLogo.png" alt="all lager brewing logo" />
        </LogoDiv>
        <UserDiv>
          <Link to="/DraftBoard">DraftBoard</Link>
          <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
        </UserDiv>
      </PrimaryNavContainer>
    )
  }
}

export default PrimaryNav
