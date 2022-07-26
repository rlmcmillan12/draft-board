import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from './routes/Home'
import Drafts from './routes/Drafts'
import DraftBoard from './routes/DraftBoard'
import Contact from './routes/Contact'
import Login from './routes/Login'
import Protected from './components/Protected'
import Display from './routes/Display'

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #95c5d8c5;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppContainer className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/drafts" element={<Drafts />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/draftboard"
          element={
            <Protected>
              <DraftBoard />
            </Protected>
          }
        />
        <Route path="/display" element={<Display />} />
      </Routes>
    </AppContainer>
  )
}

export default App
