import React from 'react'
import { useParams } from 'react-router-dom'
export default function Shoes() {
    const shoes = [
        {id: 1, name: 'Nike', price: 100},
        {id: 2, name: 'Adidas', price: 200},
        {id: 3, name: 'Reebok', price: 150},
        {id: 4, name: 'Puma', price: 130}
    ]
    const {id} = useParams()
    console.log(id)
    const shoe = shoes.find(shoe => shoe?.id === Number(id))
  return (
    <div>
      <p>Shoes.com</p>
      <h1>{shoe?.name}</h1>
      <p>{shoe?.price}</p>
    </div>
  )
}
