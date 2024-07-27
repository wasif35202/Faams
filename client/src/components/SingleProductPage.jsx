import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../redux/actions/productActions'



const SingleProductPage = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {singleProduct} = useSelector((state) => state.productSlice)


 
  useEffect(
    () => { dispatch(fetchProduct(id)) },
    [dispatch]
  )
  
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
          <p className="text-lg font-bold">{singleProduct.title}</p>{" "}
          <p className="text-lg font-bold">{singleProduct.price}</p>
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