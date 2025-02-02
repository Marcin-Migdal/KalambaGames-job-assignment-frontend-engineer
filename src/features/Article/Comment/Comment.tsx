import { Comment } from "app-types/generated/data-contracts";
import { Avatar } from "components";
import { Link } from "react-router-dom";
import { formatToPublicationDate, UrlPaths } from "utils";

export type ArticleCommentType = {
  editable?: boolean;
  deletable?: boolean;
} & Comment;

type ArticleCommentProps = {
  comment: ArticleCommentType;
};

export const ArticleComment = ({ comment }: ArticleCommentProps) => {
  const { editable, deletable, body, author, createdAt } = comment;

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <Link to={`${UrlPaths.PROFILE}/${author.username}`} className="comment-author">
          <Avatar avatar={author.image} className="comment-author-img" />
        </Link>
        &nbsp;
        <Link to={`${UrlPaths.PROFILE}/${author.username}`} className="comment-author">
          {author.username}
        </Link>
        <span className="date-posted">{formatToPublicationDate(createdAt)}</span>
        <span className="mod-options">
          {editable && <i className="ion-edit" />}
          {deletable && <i className="ion-trash-a" />}
        </span>
      </div>
    </div>
  );
};
