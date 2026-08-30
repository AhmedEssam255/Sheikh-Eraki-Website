'use client';

import { useState, useEffect, useActionState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

async function saveItemAction(apiUrl, isMessage, isLink, prevState, formData) {
  try {
    const title = formData.get('title')?.toString().trim();
    const mediaUrlOrBody = formData.get('mediaUrlOrBody')?.toString().trim();
    const href = formData.get('href')?.toString().trim();

    if (!title) {
      return { success: false, message: 'يرجى إدخال العنوان' };
    }

    const httpsRegex = /^https:\/\/[^\s/$.?#].[^\s]*$/i;

    // Handle Link Logic
    if (isLink) {
      const icon = mediaUrlOrBody;
      if (!icon) {
        return { success: false, message: 'يرجى إدخال رابط الصورة (Icon)' };
      }
      if (!httpsRegex.test(icon)) {
        return {
          success: false,
          message: 'يرجى إدخال رابط صورة صالح يبدأ بـ https://',
        };
      }

      if (!href) {
        return { success: false, message: 'يرجى إدخال الرابط المستهدف (Href)' };
      }
      if (!httpsRegex.test(href)) {
        return {
          success: false,
          message: 'يرجى إدخال رابط صالح يبدأ بـ https://',
        };
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title, icon, href }),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody?.message || 'فشل في حفظ البيانات');
      }

      const data = await response.json();
      return {
        success: true,
        message: data.message || 'تم حفظ البيانات بنجاح',
        shouldRedirect: true,
      };
    }

    // Handle Books, Messages, and Markets Logic
    if (!mediaUrlOrBody) {
      return {
        success: false,
        message: isMessage ? 'يرجى إدخال نص الرسالة' : 'يرجى إدخال الرابط',
      };
    }

    if (!isMessage) {
      if (!httpsRegex.test(mediaUrlOrBody)) {
        return {
          success: false,
          message: 'يرجى إدخال رابط صالح يبدأ بـ https://',
        };
      }
    }

    const requestBody = isMessage
      ? { title, body: mediaUrlOrBody }
      : { name: title, url: mediaUrlOrBody };

    const fetchUrl = isMessage
      ? apiUrl
      : `${apiUrl}?url=${encodeURIComponent(mediaUrlOrBody)}`;

    const response = await fetch(fetchUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody?.message || 'فشل في حفظ البيانات');
    }

    const data = await response.json();

    return {
      success: true,
      message: data.message || 'تم حفظ البيانات بنجاح',
      shouldRedirect: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || 'حدث خطأ أثناء الإضافة',
    };
  }
}

export default function AddItemForm({
  isBook = false,
  isLink = false,
  isMessage = false,
  title = isBook
    ? 'إضافة كتاب'
    : isLink
      ? 'إضافة رابط'
      : isMessage
        ? 'إضافة رسالة'
        : 'إضافة متجر',
  endpointPath = isBook
    ? 'books'
    : isLink
      ? 'links'
      : isMessage
        ? 'messages'
        : 'markets',
  redirectPath = '/admin/books&markets',
  titlePlaceholder = isBook ? 'اسم الكتاب' : 'العنوان',
  urlPlaceholder = isBook
    ? 'رابط الكتاب pdf'
    : isMessage
      ? 'نص الرسالة'
      : isLink
        ? 'رابط أيقونة الصورة'
        : 'الرابط',
}) {
  const router = useRouter();

  const [showPreview, setShowPreview] = useState(false);
  const [contentInput, setContentInput] = useState('');

  // Regex to ensure the URL starts with https:// and has a valid pattern
  const isValidUrl = /^https:\/\/[^\s/$.?#].[^\s]*$/i.test(contentInput.trim());

  const apiUrl = `${process.env.NEXT_PUBLIC_API}/admin/api/${
    isBook ? 'books' : endpointPath
  }`;

  const actionWithEndpoint = saveItemAction.bind(
    null,
    apiUrl,
    isMessage,
    isLink,
  );

  const [state, formAction, isActionPending] = useActionState(
    actionWithEndpoint,
    {
      success: null,
      message: '',
    },
  );

  useEffect(() => {
    if (state?.shouldRedirect) {
      const timeOut = setTimeout(() => {
        router.push(redirectPath);
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [state, router, redirectPath]);

  return (
    <main className='flex-1 p-6 rtl'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-emerald-900 mb-6 text-center dark:text-slate-100'>{title}</h2>

        {(isBook || isLink) && (
          <section className='border-2 border-emerald-100 rounded-2xl p-5 m-5 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:shadow-slate-900/50'>
            <form
              className='flex justify-center items-center gap-5 text-emerald-800 font-medium dark:text-slate-300'
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor='showPreview'>
                {isBook ? 'عرض الكتاب' : 'عرض الصورة'}
              </label>
              <input
                type='checkbox'
                id='showPreview'
                checked={showPreview}
                onChange={(e) => setShowPreview(e.target.checked)}
                className='accent-emerald-500'
              />
            </form>

            <div className='mt-4 flex justify-center items-center'>
              {showPreview && isValidUrl ? (
                isBook ? (
                  <iframe
                    src={`https://docs.google.com/gview?url=${encodeURIComponent(
                      contentInput,
                    )}&embedded=true`}
                    allowFullScreen
                    width='100%'
                    height='100%'
                    className='rounded-xl min-h-[400px] border border-emerald-100 shadow-md dark:border-slate-600'
                  ></iframe>
                ) : (
                  <div>
                    <Image
                      src={contentInput}
                      width={75}
                      height={75}
                      alt={title}
                      className='rounded-full border-2 border-emerald-100 shadow-md dark:border-slate-600'
                    />
                  </div>
                )
              ) : showPreview ? (
                <p className='text-center text-emerald-700 my-4 dark:text-slate-400'>
                  {contentInput
                    ? 'يرجى إدخال رابط مكتمل وصالح يبدأ بـ https://'
                    : isBook
                      ? 'يرجى إدخال رابط PDF لعرضه'
                      : 'يرجى إدخال رابط صورة لعرضها'}
                </p>
              ) : null}
            </div>
          </section>
        )}

        <form action={formAction}>
          <section>
            <fieldset className='border-2 border-emerald-100 rounded-2xl p-5 flex flex-col justify-center items-center gap-5 m-5 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:shadow-slate-900/50'>
              <legend>
                <h3 className='border-b-2 rounded-xl border-emerald-200 p-1 font-semibold text-emerald-900 dark:border-slate-600 dark:text-slate-100'>
                  {title}
                </h3>
              </legend>
              <input
                type='text'
                name='title'
                placeholder={titlePlaceholder}
                required={true}
                className='border-2 border-emerald-200 rounded-xl p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30 text-emerald-950 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-emerald-400 dark:focus:border-emerald-400'
              />

              {isMessage ? (
                <textarea
                  name='mediaUrlOrBody'
                  placeholder={urlPlaceholder}
                  required={true}
                  rows={5}
                  value={contentInput}
                  onChange={(e) => setContentInput(e.target.value)}
                  className='border-2 border-emerald-200 rounded-xl p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30 text-emerald-950 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-emerald-400 dark:focus:border-emerald-400'
                />
              ) : (
                <input
                  type='text'
                  name='mediaUrlOrBody'
                  placeholder={urlPlaceholder}
                  required={true}
                  value={contentInput}
                  onChange={(e) => setContentInput(e.target.value)}
                  className='border-2 border-emerald-200 rounded-xl p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30 text-emerald-950 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-emerald-400 dark:focus:border-emerald-400'
                />
              )}

              {isLink && (
                <input
                  type='text'
                  name='href'
                  placeholder='الرابط المستهدف (href)'
                  required={true}
                  className='border-2 border-emerald-200 rounded-xl p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30 text-emerald-950 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-emerald-400 dark:focus:border-emerald-400'
                />
              )}
            </fieldset>

            {state?.message && (
              <p
                className={`mx-5 mb-3 font-semibold ${
                  state.success ? 'text-emerald-600' : 'text-red-600'
                }`}
              >
                {state.message}
              </p>
            )}

            <button
              type='submit'
              disabled={isActionPending}
              className='bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white p-2 rounded-xl border-2 border-emerald-400 disabled:opacity-50 mx-5 shadow-md font-semibold dark:border-emerald-500 dark:hover:from-emerald-600 dark:hover:to-emerald-500'
            >
              {isActionPending ? 'جاري النشر...' : 'نشر'}
            </button>
          </section>
        </form>
      </div>
    </main>
  );
}