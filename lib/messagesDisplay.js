const MessagesDisplay = ({data}) => {
  return (
    <div className='w-full space-y-4'>
      {typeof data === 'string' ? (
        <p className='text-red-500'>{data}</p>
      ) : (
        data?.map((message, id) => (
          <article
            key={id}
            className='flex flex-col justify-center items-start m-5 p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50'
          >
            <h3 className='text-xl font-bold text-emerald-900 mb-2 dark:text-slate-100'>{message.title}</h3>
            <hr className='w-full border-emerald-100 dark:border-slate-600' />
            <p className='mt-3 text-emerald-950 leading-relaxed text-right dark:text-slate-200'>{message.body}</p>
          </article>
        ))
      )}
    </div>
  );
}

export default MessagesDisplay;