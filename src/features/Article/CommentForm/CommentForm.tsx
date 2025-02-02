import { Avatar } from "components";
import { useAuth } from "context/AuthContext/AuthContext";

export const CommentForm = () => {
  const { user } = useAuth();

  return (
    <form className="card comment-form">
      <div className="card-block">
        <textarea className="form-control" placeholder="Write a comment..." rows={3} />
      </div>
      <div className="card-footer">
        <Avatar avatar={user?.image} className="comment-author-img" />
        <button className="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
  );
};
