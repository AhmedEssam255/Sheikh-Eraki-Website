'use client';

import { useEffect } from 'react';

import {
  useRouter,
  useSearchParams,
  useParams,
} from 'next/navigation';

import authAdmin from '../../../../lib/authAdmin';

import EditItemForm from '../../../../lib/editItemForm';

const EditMessage = () => {
  const { title } = useParams();

  const decodedTitle = decodeURIComponent(title);

  const searchParams = useSearchParams();

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
      endpoint="messages"
      title="تحرير رسالة"
      query={decodedTitle}
      allItems={allItems}
    />
  );
};

export default EditMessage;
