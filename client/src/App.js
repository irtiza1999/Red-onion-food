import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Auth, {
  AuthContextProvider,
  PrivateRoute,
} from './components/Login/useAuth'
import { auth } from 'firebase'
import NoMatch from './components/NoMatch/NoMatch'
import FoodMenu from './components/FoodMenu/FoodMenu'

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/menu">
              <FoodMenu />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/">
              <FoodMenu />
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthContextProvider>
  )
}

export default App
