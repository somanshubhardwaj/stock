import axios from "axios";
const API_KEY = process.env.FINNHUB_API_KEY;
export const fetchMarketNews = async () => {
  try {
    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=general`,
      {
        params: {
          token: API_KEY,
        },
      },
      {
        caches: "no-store",
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
