import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
//firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../firebaseConfig'
import { useState, createContext } from 'react'

firebase.initializeApp(firebaseConfig)

const AuthContext = createContext()
export const AuthContextProvider = (props) => {
  const auth = Auth()
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth()
  const authUser = localStorage.getItem('hot-onion-user')

  if (auth.user) console.log(auth.user.email)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

const getUser = (user) => {
  const { displayName, email, photoURL } = user
  return {
    name: displayName,
    email,
    photo: photoURL,
  }
}

const Auth = () => {
  const [user, setUser] = useState(null)
  const provider = new firebase.auth.GoogleAuthProvider()

  const signInWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const signedInUser = getUser(res.user)
        setUser(signedInUser)
        localStorage.setItem('hot-onion-user', true)
        return res.user
      })
      .catch((err) => {
        console.log(err)
        setUser(null)
        return err.message
      })
  }

  const signUpWithPassword = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const signedInUser = getUser(res.user)
        setUser(signedInUser)
        localStorage.setItem('hot-onion-user', true)
        return res.user
      })
      .catch((err) => {
        console.log(err)
        setUser(null)
        return err.message
      })
  }

  const signInWithPassword = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const signedInUser = getUser(res.user)
        setUser(signedInUser)
        localStorage.setItem('hot-onion-user', true)
        return res.user
      })
      .catch((err) => {
        console.log(err)
        setUser(null)
        return err.message
      })
  }

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(function () {
        console.log('signed out success')
        localStorage.removeItem('hot-onion-user')
        setUser(null)
      })
      .catch(function (error) {
        console.log(error.message)
      })
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const currentUser = getUser(user)
        setUser(currentUser)
      } else {
        // No user is signed in.
      }
    })
  }, [])

  return {
    user,
    signInWithGoogle,
    signUpWithPassword,
    signInWithPassword,
    signOut,
  }
}

export default Auth
