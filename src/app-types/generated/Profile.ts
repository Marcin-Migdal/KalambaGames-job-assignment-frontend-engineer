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

import { GenericErrorModel, ProfileResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Profile<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get a profile of a user of the system. Auth is optional
   *
   * @tags Profile
   * @name GetProfileByUsername
   * @summary Get a profile
   * @request GET:/profiles/{username}
   */
  getProfileByUsername = (username: string, params: RequestParams = {}) =>
    this.request<ProfileResponse, void | GenericErrorModel>({
      path: `/profiles/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Follow a user by username
   *
   * @tags Profile
   * @name FollowUserByUsername
   * @summary Follow a user
   * @request POST:/profiles/{username}/follow
   * @secure
   */
  followUserByUsername = (username: string, params: RequestParams = {}) =>
    this.request<ProfileResponse, void | GenericErrorModel>({
      path: `/profiles/${username}/follow`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Unfollow a user by username
   *
   * @tags Profile
   * @name UnfollowUserByUsername
   * @summary Unfollow a user
   * @request DELETE:/profiles/{username}/follow
   * @secure
   */
  unfollowUserByUsername = (username: string, params: RequestParams = {}) =>
    this.request<ProfileResponse, void | GenericErrorModel>({
      path: `/profiles/${username}/follow`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
