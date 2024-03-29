import React,{useEffect, useState} from 'react'

function App() {
   const [img, setImg] =useState("")
   const [loading, setLoading] =useState(false)

   useEffect( () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        setImg(data.message)
        setLoading(true)
    })
   }, [])

   //if data hasn't loaded yet, display loading message
    if(!loading){
        return <p>Loading...</p>
    }

  return (
    <div>
        <img src={img} alt="A Random Dog" />
    </div>
  )
}

export default App