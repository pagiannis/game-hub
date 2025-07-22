import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a5a0a28329a84d90ba7180d2754107c0",
  },
});
