'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import authAdmin from '../../../../lib/authAdmin';
import EditItemForm from '../../../../lib/editItemForm';

const EditMessage = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
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
      endpoint='messages'
      title='تحرير رسالة'
      query={decodedTitle}
      allItems={allItems}
    />
  );
};

export default EditMessage;
