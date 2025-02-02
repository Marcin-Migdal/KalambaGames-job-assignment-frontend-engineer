import { Article } from "app-types/generated/data-contracts";
import classNames from "classnames";

import { useAuth } from "context/AuthContext/AuthContext";
import { addFavoriteArticle, deleteFavoriteArticle } from "services";

type FavoriteArticleButtonProps = {
  article: Article;
  onChange: () => void;
  className?: string;
  noText?: boolean;
};

export const FavoriteArticleButton = ({ article, onChange, className, noText = false }: FavoriteArticleButtonProps) => {
  const { user } = useAuth();

  const handleAddPostToFavorites = async () => {
    if (!article) {
      return;
    }

    try {
      if (article.favorited) {
        await deleteFavoriteArticle(article.slug);
      } else {
        await addFavoriteArticle(article.slug);
      }

      onChange();
    } catch (error) {
      console.log(error);
    }
  };

  if (!user || article.author.username === user.username) {
    return null;
  }

  return (
    <button
      className={classNames("btn", "btn-sm", "btn-outline-primary", "action-btn", className, {
        active: article.favorited,
      })}
      onClick={handleAddPostToFavorites}
    >
      <i className="ion-heart" />
      &nbsp;
      {!noText ? (
        <>
          {!article.favorited ? "Favorite Post" : "Remove from favorites"} &nbsp;
          <span className="counter">({article.favoritesCount})</span>
        </>
      ) : (
        <span className="counter">{article.favoritesCount}</span>
      )}
    </button>
  );
};
