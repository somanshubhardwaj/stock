// app/api/market-status/route.js
import axios from 'axios';
import { NextResponse } from 'next/server';

import { unstable_noStore as nostore } from "next/cache";
export async function GET() {
  nostore();

  const response = await axios.get('https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo');
  
  return NextResponse.json(response.data.markets);
}
