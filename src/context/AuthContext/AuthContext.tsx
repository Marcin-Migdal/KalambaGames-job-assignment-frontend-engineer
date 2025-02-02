import { User } from "app-types/generated/data-contracts";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCurrentUser, signIn } from "services";
import { deleteAuthToken, setAuthToken } from "services/api";
import { UrlPaths } from "utils";
import { isTokenValid } from "./utils/isTokenValid";
import { removeTokenFromLocalStorage } from "./utils/removeTokenFromLocalStorage";
import { saveTokenToLocalStorage } from "./utils/saveTokenToLocalStorage";

type AuthContextType = {
  user: User | null | undefined;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const history = useHistory();
  const [user, setUser] = useState<User | null | undefined>(undefined);

  const handleCorrectSignIn = (user: User) => {
    setUser(user);
    setAuthToken(user.token);
    saveTokenToLocalStorage(user.token);
  };

  const onSignIn = async (email: string, password: string) => {
    try {
      const authUserResponse = await signIn(email, password);

      handleCorrectSignIn(authUserResponse.data.user);

      history.push(UrlPaths.HOME);
    } catch (error) {
      // error handling, implementing toast to display simple error message
      console.error(error);
    }
  };

  const signOut = useCallback(() => {
    setUser(null);
    deleteAuthToken();
    removeTokenFromLocalStorage();

    history.push(UrlPaths.HOME);
  }, [history]);

  useEffect(() => {
    const initializeAuthToken = async () => {
      if (isTokenValid()) {
        const token = localStorage.getItem("authToken");

        if (token) {
          setAuthToken(token);
          const currentUserResponse = await getCurrentUser();

          handleCorrectSignIn(currentUserResponse.data.user);
        }
      } else {
        signOut();
      }
    };

    initializeAuthToken();
  }, [signOut]);

  return <AuthContext.Provider value={{ user, signIn: onSignIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
