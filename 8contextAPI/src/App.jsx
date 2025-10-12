import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserConetxtProvider from './context/UserContextProvider'

function App() {

  return (
    <UserConetxtProvider>
      <h1>Welcome to Context Api</h1>
      <Login/>
      <Profile/>
    </UserConetxtProvider>
  )
}

export default App
