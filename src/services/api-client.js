import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e9e93bde497c4969a7eb8cd264920a29",
  },
});
