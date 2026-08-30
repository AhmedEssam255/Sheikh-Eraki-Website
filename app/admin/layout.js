import Link from "next/link";
export default function AdminLayout({ children }) {
  return (
    <main className="flex-1 mb-2 p-6 rtl">
      <header>
        <nav className="flex justify-evenly items-center border-b-2 border-emerald-100 p-3 bg-white rounded-xl shadow-sm mb-6 dark:border-slate-600 dark:bg-slate-800 dark:shadow-slate-900/50">
          <Link
            className="text-lg font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-600 transition-colors dark:text-slate-200 dark:hover:text-emerald-400"
            href="/admin"
          >
            الرئيسية
          </Link>
          <Link
            className="text-lg font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-600 transition-colors dark:text-slate-200 dark:hover:text-emerald-400"
            href="/admin/books&markets"
          >
            الكتب
          </Link>
          <Link
            className="text-lg font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-600 transition-colors dark:text-slate-200 dark:hover:text-emerald-400"
            href="/admin/messages"
          >
            الرسائل
          </Link>
          <Link
            className="text-lg font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-600 transition-colors dark:text-slate-200 dark:hover:text-emerald-400"
            href="/admin/links"
          >
            الروابط
          </Link>
        </nav>
      </header>
      <section>{children}</section>
    </main>
  );
}