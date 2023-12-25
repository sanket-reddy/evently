import { CreateUserParams } from "@/types";
import User from "../database/Models/user.models";
import { handleError } from "../utils";
import connectDb from "../database";
// import User from "../database/Models/user.models";

export default async function createUser(user: CreateUserParams) {
  try {
    connectDb();
    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}
