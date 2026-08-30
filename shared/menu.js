'use client';

import Link from 'next/link';
import {useRef} from 'react';

const navBar = {
  home: {
    name: 'الرئيسية',
    href: '/',
  },
  books: {
    name: 'الكتب',
    href: '/books',
  },
  messages: {
    name: 'الرسائل',
    href: '/messages',
  },
  videos: {
    name: 'فيديوهات',
    href: '/videos',
  },
  about: {
    name: 'عن الشيخ',
    href: '/about',
  },
  links: {
    name: 'روابط',
    href: '/links',
  },
};

const Menu = () => {
  const menuRef = useRef();

  const back = () => {
    menuRef.current.style.display = 'none';
  };

  return (
    <nav
      id='menu'
      ref={menuRef}
      className='overflow-auto bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 hidden top-0 right-0 left-0 bottom-0 text-white border-l-4 border-emerald-600 dark:border-emerald-500 flex-col items-center justify-evenly gap-2 w-[40%] p-2 shadow-2xl rounded-l-2xl'
    >
      <button
        onClick={back}
        className='text-xl font-bold border-2 border-emerald-500/50 rounded-lg p-2 hover:bg-emerald-700 transition-colors dark:border-emerald-400/50 dark:hover:bg-emerald-600'
      >
        العودة
      </button>
      {Object.values(navBar).map((item) => (
        <button key={item.href} onClick={back} className='p-2 border-b-2 border-emerald-600 w-3/4 bg-emerald-800/60 hover:bg-emerald-700 transition-colors rounded-lg dark:border-emerald-500 dark:bg-emerald-700/60 dark:hover:bg-emerald-600'>
          <Link href={item.href}>
            <h3 className='text-xl font-bold text-emerald-50 dark:text-emerald-100'>{item.name}</h3>
          </Link>
        </button>
      ))}
    </nav>
  );
};

export default Menu;
