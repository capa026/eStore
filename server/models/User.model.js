import { db } from "../config/db.js";

class User {
  static async create({ name, lastName, email, password }) {
    const { rows } = await db.query(
      "INSERT INTO users (name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *"
    );
    return rows[0];
  }

  static async findByEmail(email) {
    const { rows } = await db.query(
      `SELECT * FROM users WHERE email = ${email}`
    );

    return rows[0];
  }
}
