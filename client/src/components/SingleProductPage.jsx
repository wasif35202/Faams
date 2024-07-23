import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'




const SingleProductPage = () => {
  const params = useParams()

  const [sProd, setsProd] = useState([])

  useEffect(
    () => { fetchSingleProducts() },
    []
  )
  const fetchSingleProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/products/${params.id}`)

      setsProd(data)


    } catch (error) {
      console.log(error.message)

    }
  }



  return (
    <>
      <div className=" bg-gray-200 p-5 w-full flex gap-3 justify-evenly">
        <div className=" rounded-md bg-white p-3">
          <img className="" src={require(`../images/p1.png`)}
            alt=""
          />
        </div>
        <div className="rounded-md bg-white p-3 ">
          <img className="" src={require(`../images/p1.png`)}
            alt=""
          />
        </div>
        <div className=" rounded-md bg-white p-3">
          <img className="" src={require(`../images/p1.png`)}
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex justify-evenly p-5 gap-2 ">
        <div className='w-1/2 rounded-md bg-gray-200 p-3'>
          <p className="text-lg font-bold">{sProd.title}</p>{" "}
          <p className="text-lg font-bold">{sProd.price}</p>
        </div>
        <div className='w-1/2 rounded-md bg-gray-200 flex flex-col items-center justify-evenly p-3'>
          <button className='bg-black text-white w-[100px] rounded-md'>Buy Now</button>
          <button className='bg-black text-white w-[100px] rounded-md'>Add to Cart</button>
        </div>

      </div>
    </>
  )
}

export default SingleProductPage 