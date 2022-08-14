import axios from "axios";

const KEY = "AIzaSyBlRmeP0tnpn3nY4KJNx2urgy5nVz0-y_o";

export const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
  },
});
