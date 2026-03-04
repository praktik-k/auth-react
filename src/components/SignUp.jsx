import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase"
import Form from './Form';
import {setNewUser} from '../store/slices/userSlice';

export default function SignUp() {
  const dispatch = useDispatch()
  const naigate = useNavigate()

  const getRegister = (email, password) => {    
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {        
        dispatch(setNewUser({
          email: user.email,
          id: user.uid,
          token: user.accesToken,
        }))

        naigate('./')
      })
      .catch((error) => {
        alert(`Ошибка! ${error}`)
      });
  } 

  return (
    <Form
      title='Регистрация'
      handleClick={getRegister}
    />
  )
}
