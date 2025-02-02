export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authTokenTimestamp");
};
