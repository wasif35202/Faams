import express from 'express';
import * as prod from "../controllers/products.js";
const productRoute = express.Router()

productRoute.route('/').get(prod.fetchAllProducts);

productRoute.route('/').post(prod.addNewProducts);

export default productRoute;







