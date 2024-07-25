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
  static async getCompanyById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const company = await Companie.getCompanyById(id);
      res.status(200).json(company);
    } catch (error) {
      next(error);
    }
  }
  static async searchCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.query;
      const aggregate = [{ $match: { companyName: { $regex: name, $options: "i" } } }];
      const companies = await Companie.searchCompany(aggregate);
      res.status(200).json(companies);
    } catch (error) {
      next(error);
    }
  }
}

export default CompanieController;
