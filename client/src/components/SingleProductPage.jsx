import React,{useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'

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
    <div className=" bg-gray-200 p-5 w-full">
      <div className=" ">
        <img className="" src={require(`../images/p1.png`)}
          alt=""
        />
      </div>
      <div className="w-full ">
        <p className="text-lg font-bold">{sProd.title}</p>{" "}
        <p className="text-lg font-bold">{sProd.price}</p>
      </div>
    </div>
  )
}

export default SingleProductPage