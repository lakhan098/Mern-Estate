import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg center mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="username" 
        className="border p-3 rounded-lg" id="username"/>
        <input type="email" placeholder="email" 
        className="border p-3 rounded-lg" id="email" />
        <input type="password" placeholder="password" 
        className="border p-3 rounded-lg" id="password" />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-50">Sign up</button>
      </form>
      <div className="flex gap-1 mt-3">
        <p>Have an account?</p>
        <Link to={"/signin"} className="text-blue-600">Sign in</Link>
      </div>
      
    </div>
  )
}
