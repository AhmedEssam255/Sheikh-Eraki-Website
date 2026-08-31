'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import authAdmin from '../../../../lib/authAdmin';
import EditItemForm from '../../../../lib/editItemForm';
const EditLink = () => {
  const { index } = useParams();
  const itemIndex = Number(index);

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

  const selectedItem = allItems[itemIndex];

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
      endpoint='links'
      title='تحرير رابط'
      selectedItem={selectedItem}
      allItems={allItems}
    />
  );
};
export default EditLink;
