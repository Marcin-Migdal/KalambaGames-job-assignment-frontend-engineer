import { Link } from "react-router-dom";

import { Article } from "app-types/generated/data-contracts";
import { AuthorMeta } from "components";
import { FavoriteArticleButton } from "features/FavoriteArticleButton/FavoriteArticleButton";
import { UrlPaths } from "utils";

type SingleArticleProps = {
  article: Article;
  fetchArticles: () => void;
};

export const SingleArticle = ({ article, fetchArticles }: SingleArticleProps) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <AuthorMeta author={article.author} updatedAt={article.updatedAt} />
        <FavoriteArticleButton article={article} onChange={fetchArticles} noText className="pull-xs-right" />
      </div>
      <Link to={`${UrlPaths.HOME}/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
};
