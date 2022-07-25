import './App.css'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from './routes/Home'
import About from './routes/About'
import PrimaryNav from './components/PrimaryNav'
import DraftBoard from './routes/DraftBoard'
import Contact from './routes/Contact'
import Login from './routes/Login'
import Protected from './components/Protected'
import Footer from './components/Footer'
import Display from './routes/Display'

const AppContainer = styled.div`
  --color-a: rgb(63, 201, 128);
  --color-b: rgb(110, 143, 233);
  min-height: 100vh;
  background: linear-gradient(to bottom right, var(--color-a), var(--color-b));
`

function App() {
  return (
    <AppContainer className="App">
      <PrimaryNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/draftboard"
          element={
            <Protected>
              <DraftBoard />
            </Protected>
          }
        />
        <Route
          path="/display"
          element={
            <Protected>
              <Display />
            </Protected>
          }
        />
      </Routes>
      <Footer />
    </AppContainer>
  )
}

export default App
