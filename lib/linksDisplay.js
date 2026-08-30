import Image from 'next/image';

const LinksDisplay = ({ data }) => {
  return (
    <div>
      {typeof data === 'string' ? (
        <p className='text-red-500'>{data}</p>
      ) : (
        <div className='mb-5 flex flex-wrap justify-center items-center gap-5 mt-4'>
          {data.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target='_blank'
              className='flex p-5 items-center justify-start gap-4 border-2 border-emerald-200 rounded-xl bg-white shadow-sm hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50 dark:hover:shadow-slate-900/80 dark:hover:border-emerald-400'
            >
              <Image
                src={link.icon}
                alt={link.title}
                width={50}
                height={50}
                className='rounded-full border-2 border-emerald-100 dark:border-slate-600'
              />
              <span className='font-semibold text-emerald-900 dark:text-slate-100'>{link.title}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinksDisplay;