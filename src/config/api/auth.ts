export const getAuthHeader = () => localStorage.getItem("authToken") || "";

export const setAuthHeader = (token: string) => {
  localStorage.setItem("auth-token", token);
};
