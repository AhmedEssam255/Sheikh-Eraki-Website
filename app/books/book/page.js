export const dynamic = 'force-dynamic';

const BookDisplay = async ({searchParams}) => {
  const url = await searchParams;

  return (
    <main className='flex-1'>
      <div className='w-full h-screen'>
        <iframe
          src={`https://docs.google.com/gview?url=${encodeURIComponent(url.url)}&embedded=true`}
          allowFullScreen
          width='100%'
          height='100%'
        ></iframe>
      </div>
    </main>
  );
};

export default BookDisplay;