// Props Destructuring 
import React from 'react'



const PropsDestruct = (props) => {
  let {email, password} = props
  
  return (
    <>
    <h1>{email}</h1>
    <h1>{password}</h1>
    </>
  )
}
const PropsDestruct1 = () => {

  return (
    <>
    <h1>Hello World</h1>
   
    </>
  )
}



export default PropsDestruct
export {PropsDestruct1}