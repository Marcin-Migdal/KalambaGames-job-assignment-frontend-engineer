import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { Article } from "app-types/generated/data-contracts";
import { AuthorMeta } from "components";
import { useAuth } from "context/AuthContext/AuthContext";
import { FavoriteArticleButton } from "features/FavoriteArticleButton/FavoriteArticleButton";
import { FollowProfileButton } from "features/FollowProfileButton/FollowProfileButton";
import { getArticle } from "services";
import { ArticleComment, ArticleCommentType } from "./Comment/Comment";
import { CommentForm } from "./CommentForm/CommentForm";

const hardCodedComments: ArticleCommentType[] = [
  {
    id: 1,
    createdAt: "12.09.2024",
    updatedAt: "12.09.2024",
    body: "With supporting text below as a natural lead-in to additional content.",
    author: {
      image: "http://i.imgur.com/Qr71crq.jpg",
      username: "Jacob Schmidt",
      bio: "Jacob Schmidt Bio",
      following: false,
    },
  },
  {
    id: 2,
    createdAt: "12.09.2024",
    updatedAt: "12.09.2024",
    body: "With supporting text below as a natural lead-in to additional content.",
    author: {
      image: "http://i.imgur.com/Qr71crq.jpg",
      username: "Jacob Schmidt",
      bio: "Jacob Schmidt Bio",
      following: false,
    },
  },
];

export const ArticlePage = () => {
  const { slug } = useParams<{ slug: string | undefined }>();
  const { user } = useAuth();

  const [article, setArticle] = useState<Article | undefined>(undefined);

  const fetchArticle = useCallback(async () => {
    if (!slug || user === undefined) {
      return;
    }

    try {
      const response = await getArticle(slug);

      setArticle(response.data.article);
    } catch (error) {
      console.log(error);
    }
  }, [slug, user]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  if (!article) {
    return null;
  }

  return (
    <>
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>

            <div className="article-meta">
              <AuthorMeta author={article.author} updatedAt={article.updatedAt} />
              <FollowProfileButton profile={article.author} onChange={fetchArticle} />
              &nbsp;&nbsp;
              <FavoriteArticleButton article={article} onChange={fetchArticle} />
            </div>
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <ReactMarkdown>{article.body}</ReactMarkdown>
            </div>
          </div>

          <hr />

          <div className="article-actions">
            <div className="article-meta">
              <AuthorMeta author={article.author} updatedAt={article.updatedAt} />
              <FollowProfileButton profile={article.author} onChange={fetchArticle} />
              &nbsp;&nbsp;
              <FavoriteArticleButton article={article} onChange={fetchArticle} />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <CommentForm />

              {hardCodedComments.map(comment => (
                <ArticleComment key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
