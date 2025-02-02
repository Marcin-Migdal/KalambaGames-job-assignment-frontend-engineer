import classNames from "classnames";
import DefaultAvatar from "../../assets/images/avatars_grey_circles.jpg";

type Props = {
  avatar?: string;
  className?: string;
};

export const Avatar = ({ avatar, className }: Props) => {
  return <img className={classNames(className)} src={avatar ? avatar : DefaultAvatar} />;
};
