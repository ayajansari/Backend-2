import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {
  const [jokes,setJokes]=useState([])
  
  useEffect(()=>{

    axios.get('/api/jokes')
    .then((res)=>{
      console.log("data received:",res.data)
      setJokes(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })

  },[])
  return jokes? (
    <>
      <h1>chai aur full stack</h1>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map( (joke)=>(
          <div key={joke.id}>
            <h1>{joke.title}</h1>
            <h3>{joke.content}</h3>
          </div>
        ))
      }
    </>
  ) :null;

} 

export default App
