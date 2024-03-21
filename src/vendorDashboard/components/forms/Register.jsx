import React, {useState} from 'react'
import { API_URL } from '../../data/apiPath';

const Register = ({showLoginHandler}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = ()=>{
    setShowPassword(!showPassword);
  }
  

const handleSubmit = async(e)=>{
    e.preventDefault();
try {
      const response = await fetch(`${API_URL}/vendor/register`,{
        method:'POST',
        headers:{
          'Content-Type' :'application/json'
        },
        body: JSON.stringify({username, email, password })
      })

      const data = await response.json();
      if(response.ok){
        console.log(data);
        setUsername("");
        setEmail("");
        setPassword("");
        alert( "vendor registered success")
        showLoginHandler()
      }
      else{
        setError(data.error)

      }
    } catch (error) {
      console.error("restration failed", error);
      alert("Registartion failed")
}

}

  return (
    <div className="registerSection">
          <form  className='authForm' onSubmit={handleSubmit} autoComplete='off'>
          
        <h3>Vendor Register</h3>
            <label>Username</label>
            <input type="text" name='username' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='enter your name'/><br />
            <label>Email</label>
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/><br />
            <label>Password</label>
            <input type={showPassword? "text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='enter your password'/><br />
            <span className='showPassword'
              onClick={handleShowPassword}
              >{showPassword ? 'Hide' : 'Show'}</span>
    <div className="btnSubmit">
        <button type='submit'>Submit</button>
    </div>
        </form>
    </div>
  )
}

export default Register