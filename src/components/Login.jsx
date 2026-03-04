import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from './Form';
import {setNewUser} from '../store/slices/userSlice';

export default function Login() {
  const dispatch = useDispatch()
  const naigate = useNavigate()

  const getLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {                
        dispatch(setNewUser({
          email: user.user.email,
          id: user.user.uid,
          token: user.user.accessToken,
        }))

        naigate('/',{
          replace: true,
        })
      })
      .catch((error) => {
        alert(`Ошибка! ${error}`)
      });
  } 

  return (
    <Form
      title='Войти'
      handleClick={getLogin}
    />
  )
}
