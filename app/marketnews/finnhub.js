import axios from "axios";

import { unstable_noStore as nostore } from "next/cache";
const API_KEY = process.env.FINNHUB_API_KEY;
export const fetchMarketNews = async () => {    nostore();
  try {

    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=general`,
      {
        params: {
          token: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
