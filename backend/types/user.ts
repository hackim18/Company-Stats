import { ObjectId } from "mongodb";

export type user = {
  _id: ObjectId;
  username: string;
  password: string;
};
