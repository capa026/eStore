import { db } from "../config/db.js";

class RefreshToken {
  static async create({ userID, token }) {
    const { rows } = await db.query(
      "INSERT INTO refresh_token (user_id, token) VALUES ($1, $2) RETURNING *",
      [userID, token]
    );
    return rows[0];
  }

  static async findByToken(token) {
    const { rows } = await db.query(
      "SELECT * FROM refresh_tokens WHERE token = $1",
      [token]
    );
    return rows[0];
  }

  static async deleteByUserId(userId) {
    await db.query("DELETE FROM refresh_tokens WHERE user_id = $1", [userId]);
  }
}
