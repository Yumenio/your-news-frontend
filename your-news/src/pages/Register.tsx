import React, { Dispatch, SetStateAction, useState } from 'react'
import useToken from '../hooks/useToken';
import { useNavigate } from 'react-router-dom';

async function register(credentials:{username:string, password: string}){
    return fetch("https://localhost:7226/api/auth/register", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({Username: credentials.username, Password: credentials.password})
    })
    .then(async data=> await data.json())
    .catch(error => console.log(error))
}

const Register = ({setToken}:{setToken:Dispatch<SetStateAction<string>>}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (password != password2){
            console.log("Passwords mismatch");
        }
        const token = await register({username:username, password:password})
        if(token.statusCode == 200){
            setToken(token);
            navigate("/");
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <label>
                <p><b>Username</b></p>
                <input className="border rounded" type="text" onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>
                <p><b>Password</b></p>
                <input className="border rounded" type="password" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                <p><b>Confirm Password</b></p>
                <input className="border rounded" type="password" onChange={(e) => setPassword2(e.target.value)}/>
            </label>
            <button className="border rounded p-1 mt-2" type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default Register