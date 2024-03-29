import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { user, logIn} = UserAuth();
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit= async (e) => {
        e.preventDefault()
        try {
           await logIn(email, password) ;
           navigate("/")
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

  return (
    <div className="w-full h-screen ">
    <img className="hidden sm:block absolute w-full h-full object-cover" src="https:assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                {error ? <p className="p-3 bg-red-500 my-2">Error</p> : null}
                <form onSubmit={handleSubmit} className="flex flex-col w-full py-4">
                    <input onChange={(e) => setEmail(e.target.value)} className="my-2 p-3 bg-gray-500 rounded" type="email" placeholder="Email" autoComplete="email" />
                    <input onChange={(e) => setPassword(e.target.value)} className="my-2 p-3 bg-gray-500 rounded" type="password" placeholder="password" autoComplete='current-password' />
                    <button className="bg-blue-600 py-3 my-6 rounded font-bold">Login</button>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <p>
                            <input className="mr-2" type="checkbox" />
                            Remember Me
                        </p>
                        <p>Need Help Werey??</p>
                    </div>
                    <p className="py-7"><span className="text-gray-400">New to Netflicks?</span>{" "}
                    <Link to="/signup">
                    Sign Up and Chill
                    </Link>
                    </p>
                    <div>
                        <p className="text-sm font-bold text-gray-400">This Site is strictly for Educational/Fun purposes and is in no way for Piracy or causing any Copyright Infringments</p>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
  )
}

export default Login