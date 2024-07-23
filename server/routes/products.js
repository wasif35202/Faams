import express from 'express';
import * as prod from "../controllers/products.js";
const productRoute = express.Router()

productRoute.route('/').get(prod.fetchAllProducts);

productRoute.route('/').post(prod.addNewProducts);

productRoute.route('/:id').get(prod.fetchSingleProduct);

export default productRoute;







