import { axiosClient } from "./axios";

// API to get userinfo
export const getUserInfo = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.get("/api/user/info", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response?.data?.User;
};

// API to update userInfo
export const updateUserInfo = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.put("/api/user/info", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

// Post user Like API
export const postUserLike = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.put("/api/user/liked-profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

// Post user dislike API
export const postUserDisLike = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.put("/api/user/disliked-profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

// Get user profile status API
export const getProfileStatus = async (token) => {
  const response = await axiosClient.get("api/user/profile-status", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// get user messages list API
export const getUserConversations = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.get("/api/user/conversationsList", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getUserPossibleMatches = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.get("/api/user/possible-profiles", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// get user matched profiles
export const getUserMatchedProfiles = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.get("/api/user/matchedProfiles", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateUserInfo2 = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.put("/api/user/update-info", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
