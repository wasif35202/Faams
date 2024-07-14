import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
    const params = useParams()
  return (
    <div>
        <h1>Product {params.id}</h1>
        <img src="" alt="" />
        <p>Price</p>
        <p>Discription</p>

    </div>
  )
}

export default SingleProductPage