import User from "../models/User.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;

    // Check if the user exists
    const isUserRegistered = await User.findByEmail(email);
    if (isUserRegistered) {
      return res.status(400).json({ error: "User already registered" });
    }

    // If the user does not exists, create a new user
    const hashedPasword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      name,
      lastName,
      email,
      password: hashedPasword,
    });

    //Create an access token
    //TODO

    res.status(201).json({ newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
};
