import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Profile } from "app-types/generated/data-contracts";
import { Tab, Tabs } from "components";
import { useAuth } from "context/AuthContext/AuthContext";
import { ArticleList } from "features/ArticleList/ArticleList";
import { getProfile } from "services/profiles/profiles";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export enum Articles {
  ARTICLES = "articles",
  FAVORITED_ARTICLES = "favorited-articles",
}

export const ProfilePage = () => {
  const { user } = useAuth();
  const { username } = useParams<{ username: string | undefined }>();

  const [selectedArticles, setSelectedArticles] = useState<Articles>(Articles.ARTICLES);
  const [profile, setProfile] = useState<Profile | undefined>(undefined);

  const tabs: Tab<Articles>[] = [
    {
      label: "My Articles",
      key: Articles.ARTICLES,
    },
    {
      label: "Favorited Articles",
      key: Articles.FAVORITED_ARTICLES,
      disabled: !user,
    },
  ];

  const fetchProfile = useCallback(async () => {
    if (!username || user === undefined) {
      return;
    }

    try {
      const response = await getProfile(username);

      setProfile(response.data.profile);
    } catch (error) {
      console.log(error);
    }
  }, [username, user]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleSelectedArticles = (article: Articles) => {
    setSelectedArticles(article);
  };

  return (
    <>
      <div className="profile-page">
        <ProfileInfo profile={profile} fetchProfile={fetchProfile} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <Tabs tabs={tabs} selectedTab={selectedArticles} onTabChange={handleSelectedArticles} />
              </div>

              <ArticleList
                required={{ author: true }}
                author={profile?.username}
                favorited={selectedArticles === Articles.FAVORITED_ARTICLES ? user?.username : undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
