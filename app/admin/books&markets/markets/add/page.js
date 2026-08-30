'use client';

import AddItemForm from '../../../../../lib/addItemForm';
import authAdmin from '../../../../../lib/authAdmin';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AddBookPage() {
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
    <main className='flex-1'>
      <AddItemForm title='إضافة متجر' />
    </main>
  );
}
