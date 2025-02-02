import { Profile } from "app-types/generated/data-contracts";
import { Avatar } from "components";
import { FollowProfileButton } from "features/FollowProfileButton/FollowProfileButton";

type ProfileInfoProps = {
  profile: Profile | undefined;
  fetchProfile: () => void;
};

// task requirement mentioned followers count, but there is no data that represent this value on backend
export const ProfileInfo = ({ profile, fetchProfile }: ProfileInfoProps) => {
  if (!profile) {
    return null;
  }

  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <Avatar avatar={profile.image} className="user-img" />
            <h4>{profile.username}</h4>
            <p>{profile.bio}</p>

            <FollowProfileButton profile={profile} onChange={fetchProfile} />
          </div>
        </div>
      </div>
    </div>
  );
};
