import { getRepository } from "typeorm";
import { User } from "../models";

export interface IUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

export const getUsers = async (): Promise<Array<User>> => {
  const userRepository = getRepository(User);
  return userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
  const userRepository = getRepository(User);
  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

// export const getUser = async (id: number): Promise<User | null> => {
//   const userRepository = getRepository(User);
//   const user = await userRepository.findOne({ id: id });
//   if (!user) return null;
//   return user;
// };

export const getUserByParams = async (data: any): Promise<User | null> => {
  const objArray: any = [];
  Object.keys(data).forEach((key) =>
    objArray.push({
      [key]: data[key],
    })
  );
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({
    where: [...objArray],
  });
  if (!user) return null;
  return user;
};

export const updateUser = async (
  data: any,
  body: any
): Promise<User | null> => {
  const objArray: any = [];
  Object.keys(data).forEach((key) =>
    objArray.push({
      [key]: data[key],
    })
  );
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({
    where: [...objArray],
  });
  if (!user) return null;
  userRepository.merge(user, body);
  const result = await userRepository.save(user);
  return result;
};

export const deleteUserByParams = async (data: any): Promise<User | null> => {
  const objArray: any = [];
  Object.keys(data).forEach((key) =>
    objArray.push({
      [key]: data[key],
    })
  );
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({
    where: [...objArray],
  });
  if (!user) return null;
  await userRepository.delete(user);
  return user;
};

export const deleteAllUser = async (): Promise<string> => {
  const userRepository = getRepository(User);
  await userRepository.delete({});
  return "all record deleted successfully";
};
