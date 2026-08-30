'use client';

import { useActionState, useEffect, startTransition } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const login = async (_, formData) => {
    const username = formData.get('username');
    const password = formData.get('password');

    const body = JSON.stringify({
      username: username,
      password: password,
    });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/admin/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.message);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return { message: error.message };
    }
  };

  const [state, formAction, isPending] = useActionState(login, {});

  useEffect(() => {
    if (state && state.isLoggedIn) {
      const timer = setTimeout(() => {
        router.push('/admin');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [state, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <main className='flex-1 p-6 rtl'>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-3xl font-bold text-emerald-900 mb-6 text-center dark:text-slate-100'>صفحة تسجيل الدخول للشيخ</h2>
        <form onSubmit={handleSubmit}>
          <fieldset className='flex flex-col gap-4 justify-center items-center p-8 border-2 border-emerald-100 m-3 rounded-2xl bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:shadow-slate-900/50'>
            <legend className='p-2'>
              <h3 className='text-xl font-bold text-emerald-900 dark:text-slate-100'>تسجيل الدخول للشيخ</h3>
            </legend>
            <label className='font-semibold text-emerald-800 dark:text-slate-300' htmlFor='username'>اسم المستخدم</label>
            <input
              className='border-2 border-emerald-200 rounded-xl p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30 text-emerald-950 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-emerald-400 dark:focus:border-emerald-400'
              type='text'
              name='username'
              id='username'
              placeholder='ادخل اسم المستخدم هنا'
              required
            />
            <label className='font-semibold text-emerald-800 dark:text-slate-300' htmlFor='password'>كلمة المرور</label>
            <input
              className='border-2 border-emerald-200 rounded-xl p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30 text-emerald-950 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-emerald-400 dark:focus:border-emerald-400'
              type='password'
              name='password'
              id='password'
              placeholder='ادخل كلمة المرور هنا'
              required
            />
            <button
              type='submit'
              disabled={isPending}
              className='border-2 border-emerald-400 rounded-xl p-2 px-8 mx-auto bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-semibold shadow-md hover:from-emerald-600 hover:to-emerald-500 transition-all duration-200 dark:border-emerald-500 dark:hover:from-emerald-600 dark:hover:to-emerald-500'
            >
              {isPending ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </fieldset>
        </form>
        <p className='text-center text-emerald-700 dark:text-emerald-400'>{isPending ? 'جاري الاتصال بالسيرفر...' : null}</p>
        <p className='text-center text-emerald-700 dark:text-emerald-400'>{!isPending && state && state.message ? state.message : null}</p>
      </div>
    </main>
  );
};

export default LoginPage;