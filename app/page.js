import Link from 'next/link';
import Image from 'next/image';

const homeMenu = {
  books: {
    name: 'الكتب',
    href: '/books',
    icon: '/book.png',
  },
  messages: {
    name: 'الرسائل',
    href: '/messages',
    icon: '/paper.png',
  },
  videos: {
    name: 'فيديوهات',
    href: '/videos',
    icon: '/video.png',
  },
  about: {
    name: 'عن الشيخ',
    href: '/about',
    icon: '/favicon.ico',
  },
  links: {
    name: 'روابط',
    href: '/links',
    icon: '/link.png',
  },
};

const Home = () => {
  return (
    <main className='flex-1 min-h-screen bg-emerald-50/50 p-6 rtl dark:bg-slate-900'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-emerald-900 mb-8 text-center dark:text-slate-100'>
          الصفحة الرئيسية
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6'>
          {Object.entries(homeMenu).map(([key, item]) => (
            <Link
              key={key}
              href={item.href}
              className='flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 hover:-translate-y-1 transition-all duration-200 group dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50 dark:hover:shadow-slate-900/80 dark:hover:border-emerald-400'
            >
              <div className='w-14 h-14 mb-3 rounded-full bg-emerald-100/70 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-200 dark:bg-slate-700 dark:group-hover:bg-emerald-400'>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={28}
                  height={28}
                  className='object-contain transition-transform group-hover:scale-110'
                />
              </div>

              <span className='text-lg font-medium text-emerald-950 group-hover:text-emerald-700 transition-colors dark:text-slate-100 dark:group-hover:text-emerald-300'>
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
