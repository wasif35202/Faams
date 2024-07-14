import React, { useContext } from "react";
import Prod from "./Json/ProductList.jsx";
import columns from "./Context/Context.js";
import { Link } from "react-router-dom";

const Products = () => {
    const Columns = useContext(columns);

    return (
        <div
            className={`grid w-full gap-5 p-5 ${Columns.loc == "/" ? Columns.home : Columns.loc == "/products" ? Columns.products : ""}`}
        >
            <div className="col-span-full flex justify-center">
                <p className="text-[50px] font-bold text-red-500">Our Products</p>
            </div>

            {Prod.map((P) => (
                <Link to={`/products/singleProduct/${P.id}`} className="">
                    <div className="rounded-[25px] bg-gray-200 p-5 hover:bg-yellow-50">
                        <div className="flex w-full items-center justify-center px-20 sm:px-5 md:px-10 lg:px-20">
                            <img
                                className="h-[255px] w-full"
                                src={require(`../images/${P.image}`).default}
                                alt=""
                            />
                        </div>
                        <div className="flex w-full items-center justify-between p-5">
                            <p className="text-lg font-bold">{P.title}</p>{" "}
                            <p className="text-lg font-bold">{P.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Products;
