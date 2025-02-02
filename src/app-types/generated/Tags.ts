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

import { GenericErrorModel, TagsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Tags<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get tags. Auth not required
   *
   * @name TagsList
   * @summary Get tags
   * @request GET:/tags
   */
  tagsList = (params: RequestParams = {}) =>
    this.request<TagsResponse, GenericErrorModel>({
      path: `/tags`,
      method: "GET",
      format: "json",
      ...params,
    });
}
