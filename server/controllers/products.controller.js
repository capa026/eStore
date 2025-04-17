import ProductModel from "../models/Product.model.js";
import { fakeData } from "../utils/jwt.js";

export const getByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await ProductModel.getProductsByCategory(category);

    res.status(201).json({ data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Product Fetching failed" });
  }
};

export const fill = async (req, res) => {
  try {
    fakeData.forEach(async (product) => {
      await ProductModel.create({
        name: product.name,
        description: product.description,
        quantity: product.quantity,
        price: product.price,
        category: product.category,
        image_url: product.image_url,
      });
    });

    res.status(200).json({ message: "Products inserted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Product population failed." });
  }
};
