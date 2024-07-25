import { verifyToken } from "../helpers/jwt";
import User from "../models/user";
import { Request, Response, NextFunction } from "express";
import { user } from "../types/user";

interface AuthenticatedRequest extends Request {
  user?: user | null;
}

const authentication = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) throw { name: "unauthorized", message: "Authorization Token is missing" };
    const access_token = bearerToken.slice("Bearer ".length);
    console.log(access_token);
    if (!access_token) throw { name: "JsonWebTokenError", message: "Invalid Token" };
    const { _id } = verifyToken(access_token);

    const user = await User.findByPk(_id);
    console.log(user);

    if (!user) throw { name: "unauthorized", message: "User not authorized" };
    req.user = user as user;
    next();
  } catch (error) {
    next(error);
  }
};
export default authentication;
