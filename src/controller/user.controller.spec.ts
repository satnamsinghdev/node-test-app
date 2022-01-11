import UserController from "./user.controller";
import * as UserRepository from "../repositories/user";

describe("UserController", () => {
  describe("getUserByParams", () => {
    test("should return null", async () => {
      const spy = jest
        .spyOn(UserRepository, "getUserByParams")
        .mockResolvedValueOnce(null);
      const controller = new UserController();
      const users = await controller.getUserByParams(null);
      expect(users).toEqual(null);
      spy.mockRestore();
    });
    test("should return object", async () => {
      const user: any = {
        id: 1,
        firstName: "firstName",
        lastName: "lastName",
        email: "email@example.com",
        phoneNumber: 9800123456,
      };

      const spy = jest
        .spyOn(UserRepository, "getUserByParams")
        .mockResolvedValueOnce(user);
      const controller = new UserController();
      const userRes = await controller.getUserByParams({ id: 1 });
      expect(userRes).toEqual(user);
      spy.mockRestore();
    });
  });

  describe("updateUser", () => {
    test("should return null", async () => {
      const spy = jest
        .spyOn(UserRepository, "updateUser")
        .mockResolvedValueOnce(null);
      const controller = new UserController();
      const users = await controller.updateUser(null, null);
      expect(users).toEqual(null);
      spy.mockRestore();
    });
    test("should return updated object", async () => {
      const user: any = {
        id: 1,
        firstName: "firstName",
        lastName: "lastName",
        email: "email@example.com",
        phoneNumber: 9800123456,
      };

      const spy = jest
        .spyOn(UserRepository, "updateUser")
        .mockResolvedValueOnce(user);
      const controller = new UserController();
      const userRes = await controller.updateUser({ id: 1 }, user);
      expect(userRes).toEqual(user);
      spy.mockRestore();
    });
  });
  describe("deleteAllUser", () => {
    test("should return message", async () => {
      const msg = "all record deleted successfully";
      const spy = jest
        .spyOn(UserRepository, "deleteAllUser")
        .mockResolvedValueOnce(msg);
      const controller = new UserController();
      const delmsg = await controller.deleteAllUser();
      expect(delmsg).toEqual(msg);
      spy.mockRestore();
    });
  });

  describe("deleteUserByParams", () => {
    test("delete should return null", async () => {
      const spy = jest
        .spyOn(UserRepository, "deleteUserByParams")
        .mockResolvedValueOnce(null);
      const controller = new UserController();
      const users = await controller.deleteUserByParams(null);
      expect(users).toEqual(null);
      spy.mockRestore();
    });

    test("should return deleted object", async () => {
      const payload = {
        id: 1,
        firstName: "firstName",
        lastName: "lastName",
        email: "email@example.com",
        phoneNumber: 9800123456,
      };
      const userData = payload;
      const spy = jest
        .spyOn(UserRepository, "deleteUserByParams")
        .mockResolvedValueOnce(userData);
      const controller = new UserController();
      const user = await controller.deleteUserByParams({ id: 1 });
      expect(user).toMatchObject(userData);
      expect(user).toEqual(userData);
    });
  });

  describe("createUser", () => {
    test("should add user to the database", async () => {
      const payload = {
        id: 0,
        firstName: "firstName",
        lastName: "lastName",
        email: "email@example.com",
        phoneNumber: 9800123456,
      };
      const userData = payload;
      const spy = jest
        .spyOn(UserRepository, "createUser")
        .mockResolvedValueOnce(userData);
      const controller = new UserController();
      const user = await controller.createUser(payload);
      expect(user).toMatchObject(payload);
      expect(user).toEqual(userData);
      expect(spy).toHaveBeenCalledWith(payload);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe("getUsers", () => {
    test("should return empty array", async () => {
      const spy = jest
        .spyOn(UserRepository, "getUsers")
        .mockResolvedValueOnce([]);
      const controller = new UserController();
      const users = await controller.getUsers();
      expect(users).toEqual([]);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });

    test("should return user list", async () => {
      const usersList: any = [
        {
          id: 1,
          firstName: "firstName",
          lastName: "lastName",
          email: "email@example.com",
          phoneNumber: 9800123456,
        },
      ];
      const spy = jest
        .spyOn(UserRepository, "getUsers")
        .mockResolvedValueOnce(usersList);
      const controller = new UserController();
      const users = await controller.getUsers();
      expect(users).toEqual(usersList);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });
  });
});
