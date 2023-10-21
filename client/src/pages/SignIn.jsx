import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/') //if everything works fine
    } catch (error) {
      dispatch(signInFailure(error.message));
    }    
  }
  
  return (
    <div className="p-3 max-w-lg center mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Log In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="email" placeholder="email" 
        className="border p-3 rounded-lg" id="email"  onChange={handleChange}/>
        <input type="password" placeholder="password" 
        className="border p-3 rounded-lg" id="password"  onChange={handleChange}/>
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-50">
          {loading ? 'loading...':'Log in'}
        </button>
      </form>
      <div className="flex gap-1 mt-3">
        <p>Do not have an account?</p>
        <Link to={"/signup"} className="text-blue-600">Register</Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  )
}
