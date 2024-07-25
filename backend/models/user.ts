import { ObjectId } from "mongodb";
import database from "../config/database";
import { user } from "../types/user";

class User {
  static collection() {
    return database.collection("users");
  }
  static async findByPk(id: any) {
    return (await this.collection().findOne({ _id: new ObjectId(id) })) as user;
  }
  static async findByUsername(username: string) {
    return (await this.collection().findOne({ username })) as user;
  }
}
export default User;
