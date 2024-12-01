import { IUser } from "./user.interface";
import User from "./user.model";

export const createdUser = async (payload: IUser): Promise<IUser> => {
  const newUser = new User(payload);
  await newUser.save();
  console.log("User saved to database", newUser);
  return newUser;
};

export const getUserFromDB = async () => {
  const users = await User.find();
  return users;
};

export const getUserFromDBById = async (
  payload: string | null
): Promise<IUser | null> => {
  //   const user = await User.findOne({id:payload});
  const user = await User.findOne( // find user by id and select specific fields like name , email and contact number ect
    { id: payload },
    { name: 1, email: 1, contactNumber: 1 }
  );
  return user;
};
