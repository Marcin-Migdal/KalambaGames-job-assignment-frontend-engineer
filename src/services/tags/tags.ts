import { TagsResponse } from "app-types/generated/data-contracts";
import { AxiosResponse } from "axios";
import api from "services/api";

export const getTags = (): Promise<AxiosResponse<TagsResponse, unknown>> => {
  return api.get("/tags");
};
