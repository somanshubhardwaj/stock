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
            <div key={index} className="bg-white p-4 shadow-md">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">
                  {market.primary_exchanges}
                </h2>{" "}

               
                  {market.current_status === "open" ? (
                    <span className="bg-green-200 h-min w-min py-1 px-2 rounded-md">Open</span>
                  ) : (
                    <span className="bg-red-200 h-min w-min py-1 px-2 rounded-md">Closed</span>
                  )}
              </div><p className="text-gray-900">{market.notes}</p>
              <p className="text-blue-500">{market.market_type}</p>
              <p className="text-gray-500">{market.region}</p>

              
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
