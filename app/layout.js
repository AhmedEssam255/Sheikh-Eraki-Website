import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Menu from '../shared/menu';
import MenuButton from '../shared/menu-button';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'الشيخ عراقي حامد',
  description: 'الموقع الرسمي للشيخ عراقي حامد',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='ar'
      dir='rtl'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name='google-site-verification'
          content='mGmfMBevfTHcTvh7_XsDXrnKb3M700a0Gv1yCiqYmRs'
        />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='min-h-full flex flex-col text-center bg-emerald-50/50 text-emerald-950 dark:bg-slate-900 dark:text-slate-100'>
        <header className='pb-2 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white shadow-lg border-b-4 border-emerald-600 dark:border-emerald-500 sticky top-0 left-0 right-0 z-50 flex justify-evenly items-end'>
          <Menu />
          <MenuButton />
          <h1 className='leading-none text-emerald-50 tracking-tight dark:text-emerald-100'>
            موقع الشيخ عراقي حامد
          </h1>
          <Image
            className='rounded-full border-2 border-emerald-500/50 shadow-md dark:border-emerald-400/50'
            src='/favicon.ico'
            width={60}
            height={60}
            alt='Next.js Logo'
          />
        </header>
        {children}
        <footer className='bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-emerald-100 dark:text-slate-200 border-t-4 border-emerald-600 dark:border-emerald-500 py-6'>
          <p>&copy; {new Date().getFullYear()} الشيخ عراقي حامد</p>
          <p>جميع الحقوق محفوظة</p>
          <p>
            هذا الموقع تابع لبرنامج دعم المشرواعت الدينية من{' '}
            <a
              href='https://awradi.vercel.app'
              className='underline text-emerald-300 hover:text-emerald-100 transition-colors dark:text-emerald-400 dark:hover:text-emerald-300'
            >
              أورادي
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
