import React, { useState } from 'react'
import Child from './Child';
 
const Parent = () => {
    let [userName, setUserName]=useState("menna")
  return (
    <>
      <h2>parent</h2>
    <Child data ={userName}/>
  ;
    </>
  )
}

export default Parent
