import { Link } from "react-router-dom";

import { Profile } from "app-types/generated/data-contracts";
import { Avatar } from "components";
import { formatToPublicationDate, UrlPaths } from "utils";

type AuthorMetaProps = {
  author: Profile | undefined;
  updatedAt?: string;
};

export const AuthorMeta = ({ author, updatedAt }: AuthorMetaProps) => {
  if (!author) {
    return null;
  }

  const { username, image } = author;

  return (
    <>
      <Link to={`${UrlPaths.PROFILE}/${username}`}>
        <Avatar avatar={image} />
      </Link>
      <div className="info">
        <Link to={`${UrlPaths.PROFILE}/${username}`} className="author">
          {username}
        </Link>
        {updatedAt && <span className="date">{formatToPublicationDate(updatedAt)}</span>}
      </div>
    </>
  );
};
