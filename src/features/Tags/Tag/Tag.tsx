import classNames from "classnames";

type TagProps = {
  tag: string;
  onTagChange?: (tag: string) => void;
  isSelected: boolean;
};

export const Tag = ({ tag, onTagChange, isSelected }: TagProps) => {
  return (
    <div
      onClick={() => onTagChange && onTagChange(tag)}
      className={classNames("tag-pill", "tag-default", {
        "cursor-pointer": !!onTagChange,
        "bg-primary selected": isSelected,
      })}
    >
      {tag}
    </div>
  );
};
