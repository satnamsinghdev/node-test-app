import * as express from "express";
import { Get, Route, Tags, Post, Body, Query, Put, Delete } from "tsoa";
import { User } from "../models";
import {
  getUsers,
  createUser,
  IUserPayload,
  getUserByParams,
  updateUser,
  deleteUserByParams,
  deleteAllUser,
} from "../repositories/user";

@Route("users")
@Tags("User")
export default class UserController {
  @Get("/")
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  @Post("/")
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  @Get("/")
  public async getUserByParams(@Query() params: any): Promise<User | null> {
    return getUserByParams(params);
  }

  @Put("/")
  public async updateUser(
    @Query() params: any,
    @Body() body: any
  ): Promise<User | null> {
    return updateUser(params, body);
  }

  @Delete("/")
  public async deleteAllUser(): Promise<string> {
    return deleteAllUser();
  }

  @Delete("/")
  public async deleteUserByParams(@Query() params: any): Promise<User | null> {
    return deleteUserByParams(params);
  }
}
