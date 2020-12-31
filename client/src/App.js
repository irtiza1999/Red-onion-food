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
import Delivery from './components/Delivery/Delivery'
import PlaceOrder from './components/PlaceOrder/PlaceOrder'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <NavBar />

          <Switch>
            <Route path="/menu">
              <Header />
              <FoodMenu />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>

            <PrivateRoute path="/delivery">
              <Delivery />
            </PrivateRoute>
            <PrivateRoute path="/orderplaced">
              <PlaceOrder />
            </PrivateRoute>

            <Route path="/">
              <Header />
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
