import database from "../config/database";
import { Company } from "../types/companie";
import { ObjectId, Document } from "mongodb";

class Companie {
  static collection() {
    return database.collection("companies");
  }
  static async getAllCompanies() {
    return (await this.collection().find().toArray()) as Company[];
  }
  static async getCompanyById(id: string) {
    return (await this.collection().findOne({ _id: new ObjectId(id) })) as Company;
  }

  static async searchCompany(aggregations: Document[]) {
    console.log("🚀 ~ Companie ~ searchCompany ~ aggregations:", aggregations);
    return (await this.collection().aggregate(aggregations).toArray()) as Company[];
  }
}
export default Companie;
