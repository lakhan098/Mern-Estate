import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setError(null);  //if everything works fine
      setLoading(false);
      navigate('/signin')
    } catch (error) {
      setError('An error occurred while processing your request.');
    }    
  }
  
  return (
    <div className="p-3 max-w-lg center mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="username" 
        className="border p-3 rounded-lg" id="username" onChange={handleChange}/>
        <input type="email" placeholder="email" 
        className="border p-3 rounded-lg" id="email"  onChange={handleChange}/>
        <input type="password" placeholder="password" 
        className="border p-3 rounded-lg" id="password"  onChange={handleChange}/>
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-50">
          {loading ? 'loading...':'Sign up'}
        </button>
      </form>
      <div className="flex gap-1 mt-3">
        <p>Have an account?</p>
        <Link to={"/signin"} className="text-blue-600">Sign in</Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  )
}
