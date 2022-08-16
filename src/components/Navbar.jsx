import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate()
  
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-blue-500 font-bold text-3xl cursor-pointer">NETFLICKS AND CHILL</h1>
      </Link>
        {user?.email ? <div>
          <Link to="/account">
            <button className='text-white pr-4'>Account</button>
          </Link>
            <button onClick={handleLogout} className='bg-blue-500 px-6 py-2 cursor-pointer rounded'>Log Out</button>
        </div> : <div>
          <Link to="/login">
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to="/signup">
            <button className='bg-blue-500 px-6 py-2 cursor-pointer rounded'>Sign Up</button>
          </Link>
        </div>}
    </div>
  )
}

export default Navbar