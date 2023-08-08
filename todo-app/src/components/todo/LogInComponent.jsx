import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext'

export default function LogInComponent(){

    const[username, setUsername] = useState('nithin')
    const[password, setPassword] = useState('')
 
    const[showErrorMessage, setShowErrorMessage] = useState(false)
 
    const navigate = useNavigate()

    const AuthContext = useAuth()
 
    function handleUsernameChange(event){
     setUsername(event.target.value);
    }
    function handlePasswordChange(event){
     setPassword(event.target.value);
    }
 
    function handleSubmit(){
         if(AuthContext.login(username,password))
             {             
                 navigate(`/welcome/${username}`)
                
             }else{ 
                 setShowErrorMessage(true)
               
             }
     
    }
 
         
 
     return(
 
         <div className="Login">
              <h1>Login Page</h1>
             {showErrorMessage && <div className="errorMsg" color='red'>Authentication Failed</div>}
             
 
             <div className="LoginForm">
                 <div>
                   <label>User Name: </label>
                   <input type="text" name="username"  value={username} onChange={handleUsernameChange}/>  
                 </div>
                 <div>
                   <label>Password: </label>
                   <input type="password" name="password" value={password} onChange={handlePasswordChange}/>  
                 </div>
                 <div>
                     <button type="button" name="login" onClick={handleSubmit}>Login</button>
                 </div>
             </div>
         </div>
 
     )
 }
 