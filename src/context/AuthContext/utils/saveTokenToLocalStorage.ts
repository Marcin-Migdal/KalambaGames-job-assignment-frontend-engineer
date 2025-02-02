export const saveTokenToLocalStorage = (token: string) => {
  const now = new Date().getTime();

  localStorage.setItem("authToken", token);
  localStorage.setItem("authTokenTimestamp", now.toString());
};
