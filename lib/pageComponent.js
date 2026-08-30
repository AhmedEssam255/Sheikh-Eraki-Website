import Link from 'next/link';

const PageComponent = async ({
  DisplayComponent,
  endPoint,
  title,
  search = null,
}) => {
  let data;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users/api/${endPoint}`);

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.message);
    }

    data = await response.json();
  } catch (error) {
    data = error.message;
  }

  return (
    <main className='flex-1 flex flex-col items-center p-6 rtl'>
      <div className='max-w-4xl w-full'>
        <h2 className='text-3xl font-bold text-emerald-900 mb-6 text-center dark:text-slate-100'>{title}</h2>
        {search ? (
          <div className='text-center mb-6'>
            <Link href={search.route}>
              <h3 className='inline-block m-2 px-6 py-3 border-2 border-emerald-500 rounded-xl bg-emerald-100/70 text-emerald-800 font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-200 shadow-sm dark:bg-slate-700 dark:text-slate-200 dark:border-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white'>
                {search.title}
              </h3>
            </Link>
          </div>
        ) : null}
        <DisplayComponent data={data} />
      </div>
    </main>
  );
};

export default PageComponent;
