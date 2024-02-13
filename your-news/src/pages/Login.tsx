import React, { Dispatch, SetStateAction, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

async function login(credentials:{username:string, password:string}){
  return fetch('https://localhost:7226/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({Username: credentials.username, Password: credentials.password})
  })
  .then(async data=>await data.json())
}

const Login = ({setToken}:{setToken:Dispatch<SetStateAction<string>>}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const token = await login({username, password});
    if(token.statusCode == 200){
      setToken(token.value);
      navigate("/");
    }
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-2">
        <label>
          <p>Username</p>
          <input className="border rounded" type="text" onChange={e=>setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input className="border rounded" type="password" onChange={e=>setPassword(e.target.value)}/>
        </label>
        <div className="p-4">
          <button className="border rounded" type="submit">Log In</button>
        </div>
      </form>
      <div>
        <Link to="/signup" className="rounded border p-1">Sign Up</Link>
      </div>
    </div>
  )
}

export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}