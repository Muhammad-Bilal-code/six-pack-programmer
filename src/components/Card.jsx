import React from 'react'
    
const Card = ({heading,number = "001",para}) => {
    // console.log(props)
    // const {heading,number,para} = props
    // console.log(heading)
    // console.log(number)
    // console.log(para)
  return (
    <div>
        <Number number = {number}/>
        <h2>{heading}</h2>
        <p>{para}</p>
    </div>
  )
}


const Number = ({number})=><h2>{number}</h2>


export default Card
