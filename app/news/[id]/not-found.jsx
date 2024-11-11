"use client"
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

function Notfound() {
  
  const path=useParams()
  console.log(path,"kh")
  
  return (
    <div id='error'>

    <h1>Not found!</h1>
    <p>Unfortunately,not find the requested article <b>{path.id}</b>!</p>
</div>
  )
}

export default Notfound

