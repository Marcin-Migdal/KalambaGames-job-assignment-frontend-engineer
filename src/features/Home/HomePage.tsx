import { useState } from "react";

import { Tab, Tabs } from "components";
import { useAuth } from "context/AuthContext/AuthContext";
import { ArticleList } from "../ArticleList/ArticleList";
import { Tags } from "../Tags/Tags";
import { Banner } from "./Banner/Banner";

export enum Feed {
  USER = "user-feed",
  GLOBAL = "global-feed",
}

export const HomePage = () => {
  const { user } = useAuth();
  const [selectedFeed, setSelectedFeed] = useState<Feed>(Feed.GLOBAL);
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);

  const tabs: Tab<Feed>[] = [
    {
      label: "Your Feed",
      key: Feed.USER,
      disabled: !user,
    },
    {
      label: "Global Feed",
      key: Feed.GLOBAL,
    },
  ];

  const handleFeedChange = (feed: Feed) => {
    setSelectedFeed(feed);
    setSelectedTag(undefined);
  };

  const handleTagsChange = (tag: string) => {
    setSelectedTag(selectedTag === tag ? undefined : tag);
  };

  return (
    <>
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <Tabs tabs={tabs} selectedTab={selectedFeed} onTabChange={handleFeedChange} />
              <ArticleList tag={selectedTag} favorited={selectedFeed === Feed.USER ? user?.username : undefined} />
            </div>
            <div className="col-md-3">
              <Tags selectedTag={selectedTag} onTagChange={handleTagsChange} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
