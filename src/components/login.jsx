import React, {useState} from 'react'

function Login() {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[err,setErr] = useState(false)

  const onHandleSubmitForm = async (event) => {
    try{
      event.preventDefault()
      let res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
      let jsonRes = await res.json();
      if(jsonRes.length==0){
        setErr(true)
      }else{
        if(jsonRes[0].password==password){
          setErr(false)
          console.log("Login")
        }else{
        setErr(true)
       }
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <form onSubmit={onHandleSubmitForm}>
      <label >Email: </label> <br/>
      <input type="email" onChange={()=>setEmail(event.target.value)} /> <br/> <br/>
      <label >Password: </label>  <br/>
      <input type="password" onChange={()=>setPassword(event.target.value)}  /> <br/> <br/>
      {err && <p style={{color:"red"}}>Invalid Credentials</p>} <br/>
      <button>Sign In</button>
    </form>
  )
}

export default Login