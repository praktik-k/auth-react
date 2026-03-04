import {Navigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from '../hooks/useAuth';
import { setRemoveUser } from '../store/slices/userSlice'

const HomePage = () => {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome</h1>

            <button
                onClick={()=> dispatch(setRemoveUser())}
            >Выйти {email}</button>
        </div>
    ) : (
        <Navigate to="/login" replace />
    )
}

export default HomePage