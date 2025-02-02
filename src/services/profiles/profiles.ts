import { AxiosResponse } from "axios";

import { ProfileResponse } from "app-types/generated/data-contracts";
import api from "services/api";

export const getProfile = (username: string): Promise<AxiosResponse<ProfileResponse, unknown>> => {
  return api.get(`/profiles/${username}`);
};

export const followProfile = (username: string): Promise<AxiosResponse<ProfileResponse, unknown>> => {
  return api.post(`/profiles/${username}/follow`);
};

export const unFollowProfile = (username: string): Promise<AxiosResponse<ProfileResponse, unknown>> => {
  return api.delete(`/profiles/${username}/follow`);
};
