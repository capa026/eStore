import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import { generateTokens, verifyRefreshToken } from "../utils/jwt.js";
import RefreshToken from "../models/RefreshToken.model.js";

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

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(newUser.id);

    // Set refresh token to database
    await RefreshToken.create(newUser.id, refreshToken);

    // Set refresh token in HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      //secure: true, for production
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 Days
    });

    res.status(201).json({ newUser, accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    // Find the user
    const user = await User.findByEmail(req.body.email);

    // Verify user and password
    if (!user || bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(newUser.id);

    // Set refresh token to database
    await RefreshToken.create(newUser.id, refreshToken);

    // Set refresh token in HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      //secure: true, for production
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 Days
    });

    res.status(200).json({ user, accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
};
export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    // Verify Token
    const payload = verifyRefreshToken(refreshToken);

    // Check if the token exist in Database
    const storedToken = await RefreshToken.findByToken(refreshToken);
    if (!storedToken) throw new Error("Invalid refresh token");

    // Generate new Tokens
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(
      payload.userID
    );

    // Update the token in database
    await RefreshToken.create(payload.userID, newRefreshToken);

    // Update cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      //secure: "true",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Invalid refresh token" });
  }
};

export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookie.refreshToken;
    if (!refreshToken) return res.sendStatus(204); // no content

    // Find the token in database
    const storedToken = await RefreshToken.findByToken(refreshToken);
    if (!storedToken) return res.sendStatus(204); // no content

    // Delete all the tokes for user
    await RefreshToken.deleteByUserId(storedToken.user_id);

    // Clear the cookies
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Logout failed" });
  }
};
