import { db } from "../config/db.js";

class Product {
  static async getProductsByCategory(category) {
    const { rows } = await db.query(
      "SELECT * FROM products WHERE category = $1",
      [category]
    );

    return rows[0];
  }
}

export default Product;
