'use client';

import { useState } from 'react';

const SearchPageComponent = ({ DisplayComponent, endPoint, placeHolder }) => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // فصل حالة الخطأ

  const searchData = async () => {
    // منع البحث إذا كانت الخانة فارغة
    if (!query.trim()) return;

    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/users/api/${endPoint}?search=${encodeURIComponent(query)}`,
      );

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.message || 'حدث خطأ أثناء البحث');
      }

      const result = await response.json();

      // إذا كانت الاستجابة تحتوي على items استخرجها، وإلا خذ النتيجة كما هي
      const items = result.items || result;
      setData(items);
    } catch (err) {
      setError(err.message);
      setData([]); // إرجاع مصفوفة فارغة للحفاظ على التوافق
    }
  };

  // السماح بالضغط على زر Enter للبحث
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchData();
    }
  };

  return (
    <main className='flex-1 p-6 rtl'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center justify-center flex-wrap gap-4 mb-8'>
          <input
            type='text'
            placeholder={placeHolder}
            className='my-3 border-2 border-emerald-200 rounded-xl p-3 w-full sm:w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white text-emerald-950 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:shadow-slate-900/50 dark:focus:ring-emerald-400 dark:focus:border-emerald-400'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className='my-3 px-8 py-3 border-2 border-emerald-600 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-500 hover:-translate-y-0.5 transition-all duration-200 shadow-md dark:border-emerald-500 dark:hover:from-emerald-600 dark:hover:to-emerald-500'
            onClick={searchData}
          >
            ابحث
          </button>
        </div>

        {error ? (
          <p className='text-red-500 text-center my-4'>{error}</p>
        ) : (
          <DisplayComponent data={data} />
        )}
      </div>
    </main>
  );
};

export default SearchPageComponent;
