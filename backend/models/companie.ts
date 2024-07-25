import database from "../config/database";
import { Company } from "../types/companie";

class Companie {
  static collection() {
    return database.collection("companies");
  }
  static async getAllCompanies() {
    return (await this.collection().find().toArray()) as Company[];
  }
}
export default Companie;
