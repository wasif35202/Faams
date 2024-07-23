import Products from "../models/products.js";
import asyncHandler from "express-async-handler"

export const fetchAllProducts = asyncHandler(async (req, res) => {
    const products = await Products.find({});
    if (products)
        res.json(products)


    else {
        res.json({ ok: false, message: 'no product found' })

        throw new Error('no product found')


    }
})









export const addNewProducts = async (req, res) => {
    const PRODUCT = new Products(req.body);
    try {
        await PRODUCT.save();

        res.status(201).send(PRODUCT);




    } catch (error) {

        console.log(error)
        res.status(500).json({ ok: false, message: 'Server Error' })
    }
}

export const fetchSingleProduct = asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id)
    if (product) {
        res.json(product)
    }
    else {
        res.status(404).json(
            {
                ok: false, message: 'product not found'
            }
        )
        throw new Error('product not found')
    }

}

)