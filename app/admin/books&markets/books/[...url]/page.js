'use client';

import { useEffect } from 'react';

import {
  useRouter,
  useSearchParams,
  useParams,
} from 'next/navigation';

import authAdmin from '../../../../../lib/authAdmin';

import EditItemForm from '../../../../../lib/editItemForm';

const EditBook = () => {
  const { url } = useParams();

  const searchParams = useSearchParams();

  /*
   * Next.js gives the dynamic route parameter to us decoded.
   *
   * We need to preserve the actual value that was used when
   * constructing the route, so normalize the identifier before
   * passing it to EditItemForm.
   */
  const decodedTitle = url;

  /*
   * allItems was passed as one query parameter:
   *
   * ?allItems=JSON.stringify(items)
   *
   * Therefore get() should be used instead of getAll().
   */
  const allItemsParam = searchParams.get('allItems');

  let allItems = [];

  try {
    if (allItemsParam) {
      allItems = JSON.parse(allItemsParam);
    }
  } catch (error) {
    console.error('Failed to parse allItems:', error);
  }

  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const isAdmin = await authAdmin();

        if (isAdmin?.isLoggedIn) {
          return;
        }

        router.push('/admin/login');
      } catch (error) {
        console.error('Auth error:', error);
        router.push('/admin/login');
      }
    };

    checkLogin();
  }, [router]);

  return (
    <EditItemForm
      endpoint="books"
      title="تحرير كتاب"
      query={decodedTitle}
      allItems={allItems}
    />
  );
};

export default EditBook;

