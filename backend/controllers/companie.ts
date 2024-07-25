import { Request, Response, NextFunction } from "express";
import Companie from "../models/companie";

class CompanieController {
  static async getAllCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      const companies = await Companie.getAllCompanies();
      res.status(200).json(companies);
    } catch (error) {
      next(error);
    }
  }
}

export default CompanieController;
