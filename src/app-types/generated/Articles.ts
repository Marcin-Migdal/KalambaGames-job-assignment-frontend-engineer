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

import {
  GenericErrorModel,
  MultipleArticlesResponse,
  NewArticleRequest,
  SingleArticleResponse,
  UpdateArticleRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Articles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get most recent articles from users you follow. Use query parameters to limit. Auth is required
   *
   * @tags Articles
   * @name GetArticlesFeed
   * @summary Get recent articles from users you follow
   * @request GET:/articles/feed
   * @secure
   */
  getArticlesFeed = (
    query?: {
      /**
       * Limit number of articles returned (default is 20)
       * @default 20
       */
      limit?: number;
      /**
       * Offset/skip number of articles (default is 0)
       * @default 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<MultipleArticlesResponse, void | GenericErrorModel>({
      path: `/articles/feed`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get most recent articles globally. Use query parameters to filter results. Auth is optional
   *
   * @tags Articles
   * @name GetArticles
   * @summary Get recent articles globally
   * @request GET:/articles
   */
  getArticles = (
    query?: {
      /** Filter by tag */
      tag?: string;
      /** Filter by author (username) */
      author?: string;
      /** Filter by favorites of a user (username) */
      favorited?: string;
      /**
       * Limit number of articles returned (default is 20)
       * @default 20
       */
      limit?: number;
      /**
       * Offset/skip number of articles (default is 0)
       * @default 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<MultipleArticlesResponse, void | GenericErrorModel>({
      path: `/articles`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Create an article. Auth is required
   *
   * @tags Articles
   * @name CreateArticle
   * @summary Create an article
   * @request POST:/articles
   * @secure
   */
  createArticle = (article: NewArticleRequest, params: RequestParams = {}) =>
    this.request<SingleArticleResponse, void | GenericErrorModel>({
      path: `/articles`,
      method: "POST",
      body: article,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get an article. Auth not required
   *
   * @tags Articles
   * @name GetArticle
   * @summary Get an article
   * @request GET:/articles/{slug}
   */
  getArticle = (slug: string, params: RequestParams = {}) =>
    this.request<SingleArticleResponse, GenericErrorModel>({
      path: `/articles/${slug}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Update an article. Auth is required
   *
   * @tags Articles
   * @name UpdateArticle
   * @summary Update an article
   * @request PUT:/articles/{slug}
   * @secure
   */
  updateArticle = (slug: string, article: UpdateArticleRequest, params: RequestParams = {}) =>
    this.request<SingleArticleResponse, void | GenericErrorModel>({
      path: `/articles/${slug}`,
      method: "PUT",
      body: article,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete an article. Auth is required
   *
   * @tags Articles
   * @name DeleteArticle
   * @summary Delete an article
   * @request DELETE:/articles/{slug}
   * @secure
   */
  deleteArticle = (slug: string, params: RequestParams = {}) =>
    this.request<void, void | GenericErrorModel>({
      path: `/articles/${slug}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
