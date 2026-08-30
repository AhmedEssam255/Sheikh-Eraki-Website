'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const BooksDisplay = ({ data }) => {
  const [markets, setMarkets] = useState([]);
  const [marketError, setMarketError] = useState(null);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users/api/markets`);

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(errorBody.message || 'Failed to fetch markets');
        }

        const result = await response.json();
        setMarkets(result);
      } catch (error) {
        setMarketError(error.message);
      }
    };

    fetchMarkets();
  }, []); // Empty dependency array ensures this runs ONLY ONCE when mounted

  return (
    <div className='flex flex-col justify-center gap-5'>
      <hr className='w-full border-emerald-100 dark:border-slate-600' />
      {typeof data === 'string' ? (
        <p className='text-red-500'>{data}</p>
      ) : (
        <div className='flex flex-col justify-center items-center gap-5'>
          {data && (
            <h3 className='text-xl font-semibold text-emerald-800 dark:text-slate-200'>
              انقر على اي كتاب لقراءته
            </h3>
          )}
          {data?.map((book, index) => (
            <Link
              key={index}
              href={`/books/book?url=${book.url}`}
              className='w-full sm:w-4/5 border-2 border-emerald-200 rounded-xl p-3 m-2 items-center bg-white hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50 dark:hover:shadow-slate-900/80 dark:hover:border-emerald-400'
            >
              <h4 className='text-emerald-900 font-semibold dark:text-slate-100'>
                كتاب : {book.name}
              </h4>
            </Link>
          ))}

          <hr className='w-full border-emerald-100 dark:border-slate-600' />

          <div className='flex flex-col justify-center items-center gap-5 mb-5'>
            {marketError && <p className='text-red-500'>{marketError}</p>}

            {Array.isArray(markets) && markets.length > 0 && (
              <>
                <h3 className='text-xl font-semibold text-emerald-800 dark:text-slate-200'>
                  متاجر الكتب المطبوعة
                </h3>
                {markets.map((market, index) => (
                  <a
                    href={market.url}
                    target='_blank'
                    rel='noreferrer'
                    key={index}
                  >
                    <h4 className='w-full sm:w-4/5 underline border-2 border-emerald-300 rounded-xl p-3 text-xl m-2 bg-white hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-emerald-900 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:shadow-slate-900/80'>
                      {market.name}
                    </h4>
                  </a>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksDisplay;
