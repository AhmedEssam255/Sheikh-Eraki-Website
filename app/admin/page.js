'use client';

import authAdmin from '../../lib/authAdmin';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const navBar = {
  books: {
    name: 'الكتب و المتاجر',
    href: '/admin/books&markets',
    src: '/book.png',
  },
  messages: {
    name: 'الرسائل',
    href: '/admin/messages',
    src: '/paper.png',
  },
  links: {
    name: 'روابط',
    href: '/admin/links',
    src: '/link.png',
  },
};

const AdminPage = () => {
  const [logoutState, setLogoutState] = useState('');

  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      const isAdmin = await authAdmin();
      if (isAdmin.isLoggedIn) {
        return;
      } else {
        router.push('/admin/login');
      }
    };

    checkLogin();
  }, [router]);

  const logout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/admin/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      
      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.message);
      }
      const data = await response.json();

      const timer = setTimeout(() => {
        router.push('/admin/login');
        clearTimeout(timer);
      }, 1000);

      setLogoutState(data.message);
    } catch (error) {
      setLogoutState(error.message);
    }
  };

  return (
    <main className='flex-1 p-6 rtl'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-emerald-900 mb-8 text-center dark:text-slate-100'>صفحة التحكم</h2>
        <nav className='flex flex-col gap-4 justify-center items-center'>
          {Object.entries(navBar).map(([key, item]) => (
            <Link
              className='flex justify-evenly items-center border-emerald-200 border-2 p-4 rounded-2xl w-full sm:w-1/2 bg-white shadow-sm hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 dark:border-slate-600 dark:bg-slate-800 dark:shadow-slate-900/50 dark:hover:shadow-slate-900/80 dark:hover:border-emerald-400'
              key={key}
              href={item.href}
            >
              <Image
                width={50}
                height={50}
                src={item.src}
                alt={item.name}
                className='rounded-full border-2 border-emerald-100 dark:border-slate-600'
              />
              <h3 className='font-bold text-emerald-900 dark:text-slate-100'>{item.name}</h3>
            </Link>
          ))}
        </nav>
        <div className='text-center mt-8'>
          <button
            onClick={logout}
            className='bg-red-400 hover:bg-red-500 text-white border-2 border-red-300 rounded-xl p-2 px-6 m-3 shadow-md font-semibold transition-colors dark:bg-red-500 dark:hover:bg-red-400 dark:border-red-400'
          >
            تسجيل الخروج
          </button>
          {logoutState && <p className='text-emerald-700 font-medium dark:text-emerald-400'>{logoutState}</p>}
        </div>
      </div>
    </main>
  );
};

export default AdminPage;