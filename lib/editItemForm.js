'use client';

import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import authAdmin from '../lib/authAdmin';

const EditItemForm = ({ endpoint, title, query, allItems }) => {
  const router = useRouter();

  const [item, setItem] = useState(null);
  const [edited, setEdited] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [state, setState] = useState('');

  const identifierField =
    endpoint === 'messages'
      ? 'title'
      : endpoint === 'links'
        ? 'href'
        : 'url';

  const queryValue = query || '';

  // Check authentication
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const isAdmin = await authAdmin();

        if (!isAdmin?.isLoggedIn) {
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Auth error:', error);
        router.push('/admin/login');
      }
    };

    checkLogin();
  }, [router]);

  // Find the item
  useEffect(() => {
    if (!allItems || !queryValue) return;

    /*
     * The identifier is currently passed through the URL.
     *
     * When the URL goes through Next.js routing, a "+" can become
     * a space. However, the same value inside allItems can still
     * contain "+".
     *
     * Normalize both values before comparing them.
     */
    const normalizeIdentifier = (value) => {
      if (!value) return '';

      try {
        return decodeURIComponent(value).replace(/\+/g, ' ');
      } catch {
        return value.replace(/\+/g, ' ');
      }
    };

    const normalizedQuery = normalizeIdentifier(queryValue);

    const foundItem = allItems.find(
      (currentItem) =>
        normalizeIdentifier(currentItem?.[identifierField]) ===
        normalizedQuery,
    );

    setItem(foundItem || null);
  }, [allItems, queryValue, endpoint, identifierField]);

  const handleChange = (value, key) => {
    setEdited((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isPending) return;

    setIsPending(true);
    setState('');

    const apiUrl = `${process.env.NEXT_PUBLIC_API}/admin/api/${endpoint}`;

    try {
      console.log('ABOUT TO FETCH PATCH');

      const response = await fetch(apiUrl, {
        method: 'PATCH',

        headers: {
          'Content-Type': 'application/json',
        },

        credentials: 'include',

        body: JSON.stringify({
          [identifierField]: queryValue,
          updateObject: edited,
        }),
      });

      console.log('PATCH FETCH FINISHED');
      console.log('PATCH STATUS:', response.status);

      let data;

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      console.log('PATCH DATA:', data);

      if (!response.ok) {
        throw new Error(data?.message || 'فشل في التحديث');
      }

      setState(data?.message || 'تم التحديث بنجاح');

      setTimeout(() => {
        router.push(
          `/admin/${
            endpoint === 'books' || endpoint === 'markets'
              ? 'books&markets'
              : endpoint
          }`,
        );
      }, 1000);
    } catch (error) {
      console.error('PATCH ERROR:', error);

      setState(error?.message || 'حدث خطأ أثناء التحديث');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main className="flex-1 p-6 rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center dark:text-slate-100">
          {title}
        </h2>

        <form onSubmit={handleSubmit}>
          {item &&
            Object.entries(item).map(([key, value]) => {
              if (key === 'createdAt') {
                return null;
              }

              return (
                <fieldset
                  key={key}
                  className="border-2 border-emerald-100 rounded-2xl p-5 flex flex-col justify-center items-center gap-5 m-5 bg-white shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:shadow-slate-900/50"
                >
                  <label
                    htmlFor={key}
                    className="font-semibold text-emerald-800 dark:text-slate-300"
                  >
                    {key}
                    {key === 'date'
                      ? `: ${new Date(value).toLocaleDateString()}`
                      : ''}
                  </label>

                  {key !== 'date' && (
                    <input
                      id={key}
                      type="text"
                      name={key}
                      defaultValue={value ?? ''}
                      onChange={(e) =>
                        handleChange(e.target.value, key)
                      }
                      className="border-2 border-emerald-200 rounded-xl p-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30 text-emerald-950 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-emerald-400 dark:focus:border-emerald-400"
                    />
                  )}
                </fieldset>
              );
            })}

          <div className="text-center">
            <button
              type="submit"
              disabled={isPending}
              className="bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-xl border-2 border-emerald-400 shadow-md font-semibold dark:border-emerald-500"
            >
              {isPending ? 'جار التحديث...' : 'تحرير'}
            </button>
          </div>
        </form>

        {state && (
          <p className="text-center text-emerald-700 dark:text-slate-400 mt-4">
            {state}
          </p>
        )}
      </div>
    </main>
  );
};

export default EditItemForm;
