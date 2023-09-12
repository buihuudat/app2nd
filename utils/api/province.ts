import axios from "axios";
const url = "https://provinces.open-api.vn/api/";

const provinceApi = {
  get: async () => {
    try {
      const response = await axios.get(url, {
        params: {
          depth: 3,
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default provinceApi;
