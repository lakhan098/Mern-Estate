import  { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase'
import { signInStart, signInSuccess } from '../redux/user/userSlice';

export default function OAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const HandleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)

            const res = await fetch('api/auth/google',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                })
            })
            const data = await res.json()
            console.log(data)
            dispatch(signInSuccess(data));
            navigate('/') //if everything works fine
        } catch (error) {
            console.log("Could not Sign in with Google", error)
        }
    }
  return (
    <button onClick={HandleGoogleClick} type='submit' className='bg-red-700 text-white p-3 rounded-lg hover:opacity-90'>Continue with Google</button>
  )
}
