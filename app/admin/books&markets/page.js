"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import authAdmin from "../../../lib/authAdmin";
import AdminMediaDisplay from "../../../lib/adminMediaDisplay";
import CollapsibleSection from "../../../lib/collapsibleSection";
import deleteItem from "../../../lib/deleteItem";

const AdminBooksPage = () => {
  const router = useRouter();

  const [books, setBooks] = useState([]);
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const checkLogin = async () => {
      const isAdmin = await authAdmin();
      if (isAdmin.isLoggedIn) {
        return;
      } else {
        router.push("/admin/login");
      }
    };

    checkLogin();
  }, [router]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users/api/books`);

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(errorBody.message);
        }

        const data = await response.json();

        setBooks(data);
      } catch (error) {
        setBooks(error.message);
      }
    };

    const fetchMarkets = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users/api/markets`);

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(errorBody.message);
        }

        const data = await response.json();

        setMarkets(data);
      } catch (error) {
        setMarkets(error.message);
      }
    };

    fetchBooks();
    fetchMarkets();
  }, []);

  return (
    <main className="flex-1 flex flex-col justify-evenly items-center gap-5 p-6 rtl">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center dark:text-slate-100">صفحة الكتب و متاجر الكتب</h2>

        {/* Books Section */}
        <CollapsibleSection
          addLink="/admin/books&markets/books/add"
          addTitle="إضافة كتاب"
          summaryTitle="عرض الكتب"
        >
          {typeof books === "string" ? (
            <p className="text-red-500">{books}</p>
          ) : (
            <AdminMediaDisplay
              items={books}
              className="flex flex-col gap-5 justify-center items-center w-full"
              isBooks
              editPath="/admin/books&markets/books"
              deleteFn={(url) =>
                deleteItem("books", url, null, "هل أنت متأكد من حذف هذا الكتاب؟")
              }
            />
          )}
        </CollapsibleSection>

        <hr className="border-emerald-100 w-full border-2 my-8 dark:border-slate-600" />

        {/* Markets Section */}
        <CollapsibleSection
          addLink="/admin/books&markets/markets/add"
          addTitle="إضافة متجر"
          summaryTitle="عرض المتاجر"
        >
          {typeof markets === "string" ? (
            <p className="text-red-500">{markets}</p>
          ) : (
            <AdminMediaDisplay
              items={markets}
              isMarkets
              editPath="/admin/books&markets/markets"
              deleteFn={(url) =>
                deleteItem("markets", url, null, "هل أنت متأكد من حذف هذا المتجر ؟")
              }
            />
          )}
        </CollapsibleSection>
      </div>
    </main>
  );
};

export default AdminBooksPage;