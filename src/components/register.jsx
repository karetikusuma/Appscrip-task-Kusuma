import React, {useState} from 'react'

function Register() {

  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[err,setErr] = useState(false)

  const onHandleSubmit = async (event) => {
    try{
      event.preventDefault()
      const userDetails={username,email,password}
      let getData = await fetch(`http://localhost:3001/users?email=${email}`)
      let jsonRes = await getData.json()
      if(jsonRes.length>0){
        setErr(true)
      }else{
            fetch("http://localhost:3001/users",{
            method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(userDetails)
        })
          
      }
      // if(res.ok){
      //   console.log("User Registered Successfully")
      // }
    }catch(error){
      console.log(error)
    }
    
  }
  return (
    <form onSubmit={onHandleSubmit}>
      <label >Username: </label> <br/>
      <input type="text" onChange={()=>setUsername(event.target.value)}/> <br/> <br/>
      <label >Email: </label> <br/>
      <input type="email" onChange={()=>setEmail(event.target.value)}/> <br/> <br/>
      <label >Password: </label>  <br/>
      <input type="password" onChange={()=>setPassword(event.target.value)}/> <br/> <br/>
      {err && <p style={{color:"red"}}>User already exists</p> } <br/>
      <button type='submit'>Sign Up</button>
    </form>
  )

}

export default Register