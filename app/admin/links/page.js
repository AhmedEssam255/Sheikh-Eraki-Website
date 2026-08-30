'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import authAdmin from '../../../lib/authAdmin';
import AdminMediaDisplay from '../../../lib/adminMediaDisplay';
import CollapsibleSection from '../../../lib/collapsibleSection';
import deleteItem from '../../../lib/deleteItem';

const AdminMessagesPage = () => {
  const [links, setLinks] = useState([]);

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

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/users/api/links`,
        );

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(errorBody.message);
        }

        const data = await response.json();

        setLinks(data);
      } catch (error) {
        setLinks(error.message);
      }
    };

    fetchMessages();
  }, []);

  return (
    <main className='flex-1 p-6 rtl'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-emerald-900 mb-8 text-center dark:text-slate-100'>صفحة الروابط</h2>
        <CollapsibleSection
          addLink='/admin/links/add'
          addTitle='إضافة رابط'
          summaryTitle='عرض الروابط'
        >
          {typeof links === 'string' ? (
            <p className='text-red-500'>{links}</p>
          ) : (
            <AdminMediaDisplay
              items={links}
              isLinks
              className='flex flex-col gap-5 justify-center items-center w-full'
              editPath='/admin/links'
              deleteFn={(href) =>
                deleteItem(
                  'links',
                  href,
                  null,
                  'هل أنت متأكد من حذف هذا الرابط ؟',
                )
              }
            />
          )}
        </CollapsibleSection>
      </div>
    </main>
  );
};

export default AdminMessagesPage;