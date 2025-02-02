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
  MultipleCommentsResponse,
  NewCommentRequest,
  SingleCommentResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Comments<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Get the comments for an article. Auth is optional
   *
   * @tags Comments
   * @name GetArticleComments
   * @summary Get comments for an article
   * @request GET:/articles/{slug}/comments
   */
  getArticleComments = (slug: string, params: RequestParams = {}) =>
    this.request<MultipleCommentsResponse, void | GenericErrorModel>({
      path: `/articles/${slug}/comments`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Create a comment for an article. Auth is required
   *
   * @tags Comments
   * @name CreateArticleComment
   * @summary Create a comment for an article
   * @request POST:/articles/{slug}/comments
   * @secure
   */
  createArticleComment = (slug: string, comment: NewCommentRequest, params: RequestParams = {}) =>
    this.request<SingleCommentResponse, void | GenericErrorModel>({
      path: `/articles/${slug}/comments`,
      method: "POST",
      body: comment,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a comment for an article. Auth is required
   *
   * @tags Comments
   * @name DeleteArticleComment
   * @summary Delete a comment for an article
   * @request DELETE:/articles/{slug}/comments/{id}
   * @secure
   */
  deleteArticleComment = (slug: string, id: number, params: RequestParams = {}) =>
    this.request<void, void | GenericErrorModel>({
      path: `/articles/${slug}/comments/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
