import React, { useContext, useEffect } from "react";

import { fetchAllProducts, } from '../redux/actions/productActions.js';
import columns from "./Context/Context.js";
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from "./ProductCard.jsx";


const Products = () => {
    const Columns = useContext(columns);
    const dispatch = useDispatch();
    const { productsList } = useSelector((state) => state.productSlice)

    useEffect(() => {
        dispatch(fetchAllProducts())

    }, [dispatch]);




    return (
        <div
            className={`grid w-full gap-5 p-5 ${Columns.loc == "/" ? Columns.home : Columns.loc == "/products" ? Columns.products : ""}`}
        >
            <div className="col-span-full flex justify-center">
                <p className="text-[50px] font-bold text-red-500">Our Products</p>
            </div>
            {productsList.map((ProD, index) => <ProductCard key={index} Prodd={ProD} />)}




        </div>
    );
};

export default Products;