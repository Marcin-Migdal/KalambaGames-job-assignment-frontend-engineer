import { useEffect, useState } from "react";
import { getTags } from "services";
import { Tag } from "./Tag/Tag";

type TagsProps = {
  selectedTag?: string | undefined;
  onTagChange?: (tag: string) => void;
};

export const Tags = ({ selectedTag, onTagChange }: TagsProps) => {
  const [tags, setTags] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    const handleGetTags = async () => {
      const response = await getTags();

      setTags(response.data.tags);
    };

    handleGetTags();
  }, []);

  return (
    <div className="sidebar">
      <p>Popular Tags</p>

      <div className="tag-list">
        {tags?.map(tag => (
          <Tag key={tag} tag={tag} onTagChange={onTagChange} isSelected={selectedTag === tag} />
        ))}
      </div>
    </div>
  );
};
