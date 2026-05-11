
import './App.css'
import { useLenis } from './shared/hooks/useLenis'
import Landing from './views/Landing'

function App() {

  useLenis()

  return (
    <>
      <Landing />
    </>
  )
}

export default App
