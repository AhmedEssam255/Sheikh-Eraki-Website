'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AdminMediaDisplay = ({
  items,
  isBooks,
  isLinks,
  isMarkets,
  isMessages,
  deleteFn,
  editPath,
}) => {
  const [display, setDisplay] = useState(new Array(items.length).fill(false));

  const handleChange = (index) => {
    const newArr = [...display];
    newArr[index] = !newArr[index];

    setDisplay(newArr);
  };

  return (
    <section className='flex flex-wrap justify-center w-full'>
      {items?.map(
        (
          {
            icon = '',
            name = '',
            title = '',
            url = '',
            body = '',
            href = '',
            date = '',
          },
          index,
        ) => {
          return (
            <div
              key={index}
              className='flex flex-col justify-center items-center gap-5 bg-white border-2 border-emerald-100 rounded-2xl p-4 m-2 w-[95%] shadow-sm hover:shadow-md transition-shadow dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50'
            >
              {isMessages ? (
                <div className='w-full flex justify-evenly items-center'>
                  <h3 className='font-bold text-emerald-900 dark:text-slate-100'>{title}</h3>
                  <h3 className='text-emerald-700 font-medium dark:text-slate-400'>{new Date(date).toLocaleDateString()}</h3>
                </div>
              ) : (
                <h3 className='font-bold text-emerald-900 dark:text-slate-100'>{name}</h3>
              )}

              <hr className='border-emerald-100 w-full border dark:border-slate-600' />

              {isBooks && (
                <section className='w-full flex flex-col justify-center items-center gap-5'>
                  <form className='flex justify-center items-center gap-3 text-emerald-800 font-medium dark:text-slate-300'>
                    <label htmlFor='display-book'>عرض الكتاب</label>
                    <input
                      type='checkbox'
                      id='display-book'
                      className='w-full accent-emerald-500'
                      checked={display[index]}
                      onChange={() => handleChange(index)}
                    />
                  </form>
                  {display[index] && (
                    <iframe
                      src={`https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`}
                      allowFullScreen
                      width='100%'
                      height='100%'
                      className='rounded-xl min-h-[400px] border border-emerald-100 shadow-md dark:border-slate-600'
                    ></iframe>
                  )}
                </section>
              )}

              {isLinks && (
                <Image
                  src={icon}
                  alt={title}
                  width={50}
                  height={50}
                  className='rounded-full border-2 border-emerald-100 dark:border-slate-600'
                />
              )}

              {isMessages ? (
                <p className='text-emerald-950 leading-relaxed dark:text-slate-200'>{body}</p>
              ) : isBooks || isMarkets ? (
                <a
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  className='underline w-5/6 text-center text-emerald-700 hover:text-emerald-500 transition-colors dark:text-slate-300 dark:hover:text-emerald-400'
                >
                  <h4 className='break-words'>{url}</h4>
                </a>
              ) : (
                <div className='text-center'>
                  <h4 className='font-bold text-emerald-900 dark:text-slate-100'>{title}</h4>
                  <a
                    href={href}
                    className='underline text-emerald-700 hover:text-emerald-500 transition-colors dark:text-slate-300 dark:hover:text-emerald-400 break-all'
                  >
                    {href}
                  </a>
                </div>
              )}

              <hr className='border-emerald-100 w-full border dark:border-slate-600' />

              <div className='flex justify-evenly items-center w-full'>
                <button
                  onClick={() => deleteFn(href ? href : title ? title : url)}
                  className='bg-red-400 hover:bg-red-500 p-2 rounded-xl border-2 border-red-300 active:scale-95 transition-transform text-white font-semibold shadow-sm dark:bg-red-500 dark:hover:bg-red-400 dark:border-red-400'
                >
                  حذف
                </button>
                <Link
                  href={{
                    pathname: `${editPath}/${href ? encodeURIComponent(href) : title ? encodeURIComponent(title) : encodeURIComponent(url)}`,
                    query: {
                      allItems: JSON.stringify(items),
                    },
                  }}
                  className='bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-2 rounded-xl border-2 border-emerald-400 active:scale-95 transition-transform shadow-sm font-semibold'
                >
                  تعديل
                </Link>
              </div>
            </div>
          );
        },
      )}
    </section>
  );
};

export default AdminMediaDisplay;