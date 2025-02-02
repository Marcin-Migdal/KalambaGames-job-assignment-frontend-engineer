import { LoginUserRequest, UserResponse } from "app-types/generated/data-contracts";
import { AxiosResponse } from "axios";
import api from "services/api";

export const signIn = (email: string, password: string): Promise<AxiosResponse<UserResponse, unknown>> => {
  const requestBody: LoginUserRequest = {
    user: {
      email: email,
      password: password,
    },
  };

  return api.post("/users/login", requestBody);
};

export const getCurrentUser = (): Promise<AxiosResponse<UserResponse, unknown>> => {
  return api.get("/user");
};
