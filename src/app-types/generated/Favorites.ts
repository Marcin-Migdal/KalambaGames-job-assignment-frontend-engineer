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

import { GenericErrorModel, SingleArticleResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Favorites<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Favorite an article. Auth is required
   *
   * @tags Favorites
   * @name CreateArticleFavorite
   * @summary Favorite an article
   * @request POST:/articles/{slug}/favorite
   * @secure
   */
  createArticleFavorite = (slug: string, params: RequestParams = {}) =>
    this.request<SingleArticleResponse, void | GenericErrorModel>({
      path: `/articles/${slug}/favorite`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Unfavorite an article. Auth is required
   *
   * @tags Favorites
   * @name DeleteArticleFavorite
   * @summary Unfavorite an article
   * @request DELETE:/articles/{slug}/favorite
   * @secure
   */
  deleteArticleFavorite = (slug: string, params: RequestParams = {}) =>
    this.request<SingleArticleResponse, void | GenericErrorModel>({
      path: `/articles/${slug}/favorite`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
}
