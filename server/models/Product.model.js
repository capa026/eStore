import { db } from "../config/db.js";

class Product {
  static async create({
    name,
    description,
    quantity,
    price,
    category,
    image_url,
  }) {
    const { rows } = await db.query(
      "INSERT INTO products (name, description, quantity, price, category, image_url) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, description, quantity, price, category, image_url]
    );
    return rows[0];
  }
  static async getProductsByCategory(category) {
    console.log(category);
    const { rows } = await db.query(
      "SELECT * FROM products WHERE category = $1",
      [category]
    );
    return rows;
  }
}

export default Product;
