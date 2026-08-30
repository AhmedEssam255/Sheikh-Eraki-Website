'use client';

import { useState, useEffect } from 'react';
import DisplayVideos from '../../lib/displayVideos';
import Link from 'next/link';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [error, setError] = useState(null); // فصل حالة الخطأ

  const requestVideos = async () => {
    setError(null);
    const apiLink = `${process.env.NEXT_PUBLIC_API}/users/api/videos?moreVideos=false`;

    try {
      const response = await fetch(apiLink);

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.message || 'حدث خطأ أثناء جلب الفيديوهات');
      }

      const data = await response.json();

      // تأكد من جلب المصفوفة items بنجاح
      setVideos(data.items || []);
      setNextPageToken(data.nextPageToken || '');
    } catch (err) {
      setError(err.message);
    }
  };

  const requestMoreVideos = async () => {
    if (!nextPageToken) return;

    const apiLink = `${process.env.NEXT_PUBLIC_API}/users/api/videos?moreVideos=true&nextPageToken=${nextPageToken}`;

    try {
      const response = await fetch(apiLink);

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(
          errorBody.message || 'حدث خطأ أثناء جلب المزيد من الفيديوهات',
        );
      }

      const data = await response.json();

      // دمج العناصر الجديدة مع العناصر السابقة
      setVideos((prevVideos) => [...prevVideos, ...(data.items || [])]);
      setNextPageToken(data.nextPageToken || '');
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    requestVideos();
  }, []);

  return (
    <main className='flex-1 flex flex-col items-center justify-center gap-3 p-6 rtl'>
      <Link
        href='/videos/search'
        className='mt-5 px-6 py-3 border-2 border-emerald-500 rounded-xl bg-emerald-100/70 text-emerald-800 font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-200 shadow-sm dark:bg-slate-700 dark:text-slate-200 dark:border-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white'
      >
        <h3>انقر للبحث عن فيديو في قناة الشيخ</h3>
      </Link>

      <h2 className='text-3xl font-bold text-emerald-900 mb-4 dark:text-slate-100'>آخر فيديوهات الشيخ: </h2>

      {error ? (
        <p className='text-red-500'>{error}</p>
      ) : (
        <DisplayVideos data={videos} />
      )}

      {nextPageToken && (
        <button
          onClick={requestMoreVideos}
          className='mb-5 px-8 py-3 border-2 border-emerald-600 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-500 hover:-translate-y-0.5 transition-all duration-200 shadow-md dark:border-emerald-500 dark:hover:from-emerald-600 dark:hover:to-emerald-500'
        >
          عرض المزيد
        </button>
      )}
    </main>
  );
};

export default Videos;