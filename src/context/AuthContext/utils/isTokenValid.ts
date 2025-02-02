export const isTokenValid = (): boolean => {
  const token = localStorage.getItem("authToken");
  const tokenTimestamp = localStorage.getItem("authTokenTimestamp");

  if (!token || !tokenTimestamp) {
    return false;
  }

  const now = new Date().getTime();
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

  if (now - parseInt(tokenTimestamp) > oneWeekInMilliseconds) {
    return false;
  }

  return true;
};
