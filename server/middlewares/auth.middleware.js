import { verifyAccessToken } from "../utils/jwt.js";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing access token" });
  }

  const accessToken = authHeader.split(" ")[1];
  try {
    const payload = verifyAccessToken(accessToken);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid access token" });
  }
};
