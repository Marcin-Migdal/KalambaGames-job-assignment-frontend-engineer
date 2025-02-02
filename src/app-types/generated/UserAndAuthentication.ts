/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { GenericErrorModel, LoginUserRequest, NewUserRequest, UpdateUserRequest, UserResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UserAndAuthentication<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Login for existing user
   *
   * @tags User and Authentication
   * @name Login
   * @summary Existing user login
   * @request POST:/users/login
   */
  login = (body: LoginUserRequest, params: RequestParams = {}) =>
    this.request<UserResponse, void | GenericErrorModel>({
      path: `/users/login`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Register a new user
   *
   * @tags User and Authentication
   * @name CreateUser
   * @summary Register a new user
   * @request POST:/users
   */
  createUser = (body: NewUserRequest, params: RequestParams = {}) =>
    this.request<UserResponse, GenericErrorModel>({
      path: `/users`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Gets the currently logged-in user
   *
   * @tags User and Authentication
   * @name GetCurrentUser
   * @summary Get current user
   * @request GET:/user
   * @secure
   */
  getCurrentUser = (params: RequestParams = {}) =>
    this.request<UserResponse, void | GenericErrorModel>({
      path: `/user`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updated user information for current user
   *
   * @tags User and Authentication
   * @name UpdateCurrentUser
   * @summary Update current user
   * @request PUT:/user
   * @secure
   */
  updateCurrentUser = (body: UpdateUserRequest, params: RequestParams = {}) =>
    this.request<UserResponse, void | GenericErrorModel>({
      path: `/user`,
      method: "PUT",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
