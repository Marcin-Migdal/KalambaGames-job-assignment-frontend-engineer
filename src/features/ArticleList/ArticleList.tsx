import { useCallback, useEffect, useState } from "react";

import { Article } from "app-types/generated/data-contracts";
import { useAuth } from "context/AuthContext/AuthContext";
import { ArticlesQueryParams, getArticles } from "services";
import { SingleArticle } from "./SingleArticle/SingleArticle";

type ArticleListProps = {
  required?: Partial<Record<keyof ArticlesQueryParams, boolean>>;
} & ArticlesQueryParams;

export const ArticleList = ({ required, ...otherParams }: ArticleListProps) => {
  const { user } = useAuth();
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);

  const fetchArticles = useCallback(async () => {
    try {
      if (
        user === undefined ||
        (required &&
          Object.entries(required).some(
            ([key, value]) => value && otherParams[key as keyof ArticlesQueryParams] === undefined
          ))
      ) {
        return;
      }

      const response = await getArticles(otherParams);

      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }, [
    otherParams.author,
    otherParams.favorited,
    otherParams.limit,
    otherParams.offset,
    otherParams.tag,
    required,
    user,
  ]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <>
      {articles?.map(article => (
        <SingleArticle key={article.slug} article={article} fetchArticles={fetchArticles} />
      ))}
    </>
  );
};
