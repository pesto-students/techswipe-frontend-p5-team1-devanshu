import { axiosClient } from "./axios";

export const getUserInfo = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.get("/api/user/info", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response?.data?.User;
};

export const updateUserInfo = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.put("/api/user/info", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const postUserLike = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.put("/api/user/liked-profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const postUserDisLike = async (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axiosClient.put("/api/user/disliked-profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const getUserMatchedProfiles = async () => {
  const sampleData = [
    { name: "hellena", newProfile: true, profilePic: "" },
    { name: "sully jones", newProfile: false, profilePic: "" },
    { name: "Aarya stark", newProfile: true, profilePic: "" },
  ];
  // const token = JSON.parse(localStorage.getItem("token"));
  // const response = await axiosClient.put("/api/user/info", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // console.log(response);

  return sampleData;
};

export const getProfileStatus = async (token) => {
  const response = await axiosClient.get("api/user/profile-status", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
