import jwt from "jsonwebtoken";

const ACCESS_KEY = process.env.JWT_ACCESS_KEY;
const REFRESH_KEY = process.env.JWT_REFRESH_KEY;

export const generateTokens = (userID) => {
  const accessToken = jwt.sign({ userID }, ACCESS_KEY, {
    espiresIn: "15m",
  });
  const refreshToken = jwt.sign({ userID }, REFRESH_KEY, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token) => jwt.verify(token, ACCESS_KEY);
export const verifyRefreshToken = (token) => jwt.verify(token, REFRESH_KEY);
