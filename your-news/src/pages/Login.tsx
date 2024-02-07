import React, { Dispatch, SetStateAction, useState } from 'react'
import PropTypes from 'prop-types'

async function login(credentials:{username:string, password:string}){
  console.log("username", credentials.username, "pwd", credentials.password)
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

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const token = await login({username, password});
    setToken(token)//token);
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input className="border rounded" type="text" onChange={e=>setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input className="border rounded" type="password" onChange={e=>setPassword(e.target.value)}/>
        </label>
        <div>
          <button className="border rounded" type="submit">Log In</button>
        </div>
      </form>
    </div>
  )
}

export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}