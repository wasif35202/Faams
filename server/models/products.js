import mongoose from "mongoose";





const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: Array, required: true, default: [] },
},
    { timestamps: true }
);


const Products = mongoose.model("products", productSchema);

export default Products;