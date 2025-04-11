import { db } from "../config/db.js";

class User {
  static async create({ name, lastName, email, password }) {
    const { rows } = await db.query(
      "INSERT INTO users (name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, lastName, email, password]
    );
    return rows[0];
  }

  static async findByEmail(email) {
    const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    return rows[0];
  }
}

export default User;
