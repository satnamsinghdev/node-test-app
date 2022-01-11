import express, { NextFunction, Request, Response } from "express";
import UserController from "../controller/user.controller";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const controller = new UserController();
    if (Object.keys(req.query).length) {
      const response = await controller.getUserByParams(req.query);
      return res.send({ message: "fetched successfully", data: response });
    } else {
      const response = await controller.getUsers();
      return res.send({ message: "fetched successfully", data: response });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const controller = new UserController();
    const response = await controller.createUser(req.body);
    return res.send({ message: "Added successfully", data: response });
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const controller = new UserController();
    const response = await controller.updateUser(req.query, req.body);
    if (!response) res.status(404).send({ message: "No user found" });
    return res.send({ message: "Updated Successfully", data: response });
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const controller = new UserController();
    if (Object.keys(req.query).length) {
      const response = await controller.deleteUserByParams(req.query);
      return res.send(response);
    } else {
      const response = await controller.deleteAllUser();
      return res.send(response);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
