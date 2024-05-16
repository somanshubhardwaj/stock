import React from 'react'
import { fetchMarketNews } from './finnhub'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default async function Page(){
    const news = await fetchMarketNews();

  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {news.map((article) => (
            <div key={article.id} className="bg-white p-4 shadow-md">
            <h2 className="text-xl font-bold">{article.headline}</h2>
            <p className="text-gray-500">{article.summary}</p>
            <a href={article.url} className="text-blue-500" target='_blank'>
                Read more
            </a>
            </div>
        ))}
    </div>
    <Footer/>
    </>
  )
}

