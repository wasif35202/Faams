import React, { useContext, useState, useEffect } from "react";


import columns from "./Context/Context.js";

import ProductCard from "./ProductCard.jsx";

import axios from 'axios'

const Products = () => {
    const Columns = useContext(columns);
    const [Prod, setProd] = useState([])

    useEffect(
        () => { fetchAllProducts() },
        []
    )
    const fetchAllProducts = async () => {
        try {
            const {data}  = await axios.get("http://localhost:8080/products/")
          
            setProd(data)
            console.log(data)
           
        } catch (error) {
            console.log(error.message)

        }
    }


    return (
        <div
            className={`grid w-full gap-5 p-5 ${Columns.loc == "/" ? Columns.home : Columns.loc == "/products" ? Columns.products : ""}`}
        >
            <div className="col-span-full flex justify-center">
                <p className="text-[50px] font-bold text-red-500">Our Products</p>
            </div>
            {Prod.map(ProD=> <ProductCard Prodd={ProD} />)}

       


        </div>
    );
};

export default Products;
