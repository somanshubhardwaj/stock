"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
export default function Home() {
  const [markets, setMarkets] = useState([]);
  useEffect(() => {
    fetch("/api/market-status")
      .then((res) => res.json())
      .then((data) => setMarkets(data));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {markets.map((market, index) => (
            <div key={market.index} className="bg-white p-4 shadow-md">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">
                  {market.primary_exchanges}
                </h2> <button className=" py-1 px-2 bg-red-200 rounded-md h-min w-min">
                {market.current_status}
              </button>
              </div>
              <p className="text-gray-500">{market.market_type}</p>
              <p className="text-gray-500">{market.region}</p>
             
              <p className="text-gray-500">{market.notes}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
