import Link from "next/link";

export default function CollapsibleSection({
  addLink,
  addTitle,
  summaryTitle,
  children,
}) {
  return (
    <section className="flex flex-col gap-5 justify-center items-center w-full">
      {addLink && addTitle && (
        <Link
          href={addLink}
          className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white p-3 rounded-xl border-2 border-emerald-400 shadow-md hover:from-emerald-600 hover:to-emerald-500 hover:-translate-y-0.5 transition-all duration-200 font-semibold dark:border-emerald-500 dark:hover:from-emerald-600 dark:hover:to-emerald-500"
        >
          {addTitle}
        </Link>
      )}

      <details className="w-full bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50">
        <summary className="cursor-pointer font-bold text-emerald-900 text-lg hover:text-emerald-700 transition-colors dark:text-slate-100 dark:hover:text-emerald-400">
          {summaryTitle}
        </summary>
        <div className="mt-4">
          {children}
        </div>
      </details>
    </section>
  );
}