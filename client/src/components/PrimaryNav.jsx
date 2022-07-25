import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useGetCurrentUserQuery, useLogoutMutation } from '../redux/services/user'

const PrimaryNavContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    box-shadow: 5px 5px 5px 2px #000000;
    background-color: #0000004b;
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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </PrimaryNavContainer>
    )
  }
  if (data) {
    return (
      <PrimaryNavContainer>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/DraftBoard">DraftBoard</Link>
        <div>
          <span>hello {data.username}</span>
          <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
        </div>
      </PrimaryNavContainer>
    )
  }
}

export default PrimaryNav
