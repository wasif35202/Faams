import Products from "../models/products.js";


export const fetchAllProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        res.json({ ok: true, products })
    } catch (error) {
        console.log(error)
        res.status(500).json({ ok: false, message: 'Server Error' })

    }
}




export const addNewProducts = async (req, res) => {
    const PRODUCT=new Products(req.body);
    try {
      await PRODUCT.save();
  
      res.status(201).send(PRODUCT);



      
    } catch (error) {

        console.log(error)
        res.status(500).json({ ok: false, message: 'Server Error' })
    }
}

