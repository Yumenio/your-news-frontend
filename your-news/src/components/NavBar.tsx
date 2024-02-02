import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="w-full">
      <div className="h-20 flex flex-row items-center">
        <div className=" mx-8 md:mx-auto flex w-full md:w-2/5 justify-between">
          <h1 className="text-black text-4xl font-times">Your News</h1>
          <div className="rounded border border-gray-300">
            <Link to="/login" className="text-black font-times text-2xl p-1.5">Log In</Link>
          </div>
        </div>
      </div>
      <hr className="border-black"/>
    </div>
  )
}

export default NavBar