'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import authAdmin from '../../../../../lib/authAdmin';
import EditItemForm from '../../../../../lib/editItemForm';

const EditMarket = () => {
  const { url } = useParams();
  const decodedTitle = decodeURIComponent(url);
  const searchParams = useSearchParams();
  const allItems = JSON.parse(searchParams.getAll('allItems'));

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

  return (
    <EditItemForm
      endpoint='markets'
      title='تحرير متجر'
      query={decodedTitle}
      allItems={allItems}
    />
  );
};

export default EditMarket;
