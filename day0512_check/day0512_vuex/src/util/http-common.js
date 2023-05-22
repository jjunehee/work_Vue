import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.214.40:7777/bookcafe",
  header: {
    "content-Type": "application/json",
  },
});
