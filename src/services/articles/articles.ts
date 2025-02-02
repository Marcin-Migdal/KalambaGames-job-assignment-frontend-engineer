import { AxiosResponse } from "axios";

import { MultipleArticlesResponse, SingleArticleResponse } from "app-types/generated/data-contracts";
import api from "services/api";

export type ArticlesQueryParams = {
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
};

export const getArticle = (slug: string): Promise<AxiosResponse<SingleArticleResponse, unknown>> => {
  return api.get(`articles/${slug}`);
};

export const getArticles = (params: ArticlesQueryParams): Promise<AxiosResponse<MultipleArticlesResponse, unknown>> => {
  return api.get("articles", { params });
};

export const addFavoriteArticle = (slug: string) => {
  return api.post(`/articles/${slug}/favorite`);
};

export const deleteFavoriteArticle = (slug: string) => {
  return api.delete(`/articles/${slug}/favorite`);
};
