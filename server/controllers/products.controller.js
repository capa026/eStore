import ProductModel from "../models/Product.model.js";

export const getByCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const products = await ProductModel.getProductsByCategory(category);

    res.status(201).json({ data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Product Fetching failed" });
  }
};
