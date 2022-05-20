import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="w-full h-screen">
        <img className="sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/8d0e653f-b4fc-44d2-88fe-41aa041eae72/ID-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="w-full fixed px-4 py-24 z-5">
          <div className="max-w-[400px] h-[550px] mx-auto bg-black/75 text-white">
            <div className=" max-w-[320px] mx-auto py-14">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form className="w-full flex flex-col py-4">
                <input className="p-3 my-2 bg-gray-500 rounded " type="email" placeholder="Email" autoComplete="email"/>
                <input className="p-3 my-2 bg-gray-500 rounded " type="password" placeholder="Password" autoComplete="current-password" />
                <button className="bg-red-500 py-3 my-6 rounded font-bold">Sign In</button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p className="mr-2">
                    <input type="checkbox"/> Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-8"><span className="text-gray-600">New to Netflix? </span>{''} <Link to='/register'>Sign Up
                </Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login