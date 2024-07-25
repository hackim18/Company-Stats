import { Request, Response, NextFunction } from "express";
import database from "../config/database";
import { signToken } from "../helpers/jwt";
import { comparePassword } from "../helpers/bcrypt";
import { user } from "../types/user";

class UserController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        throw { name: "BadRequest", message: "Username and password are required" };
      }
      const result = (await database.collection("users").findOne({ username })) as user;
      console.log("🚀 ~ UserController ~ login ~ result:", result);
      if (!result) {
        throw { name: "NotFound", message: "User not found" };
      }
      const isPasswordMatch = comparePassword(password, result.password);
      if (!isPasswordMatch) {
        throw { name: "Unauthorized", message: "Invalid password" };
      }
      const access_token = signToken({ _id: result._id, username: result.username });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
