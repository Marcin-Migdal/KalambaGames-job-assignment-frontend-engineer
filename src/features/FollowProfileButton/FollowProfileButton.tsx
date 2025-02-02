import classNames from "classnames";

import { Profile } from "app-types/generated/data-contracts";
import { useAuth } from "context/AuthContext/AuthContext";
import { followProfile, unFollowProfile } from "services/profiles/profiles";

type FollowProfileButtonProps = {
  profile: Profile;
  onChange: () => void;
};

export const FollowProfileButton = ({ profile, onChange }: FollowProfileButtonProps) => {
  const { user } = useAuth();

  const handleFollowProfile = async () => {
    if (!profile) {
      return;
    }

    try {
      if (profile.following) {
        await unFollowProfile(profile.username);
      } else {
        await followProfile(profile.username);
      }

      onChange();
    } catch (error) {
      console.log(error);
    }
  };

  if (!user || profile.username === user?.username) {
    return null;
  }

  return (
    <button
      onClick={handleFollowProfile}
      className={classNames("btn", "btn-sm", "btn-outline-secondary", "action-btn", {
        active: profile.following,
      })}
    >
      <i className="ion-plus-round" />
      &nbsp; {profile.following ? "Unfollow" : "Follow"} {profile.username}
    </button>
  );
};
