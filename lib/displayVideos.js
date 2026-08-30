const DisplayVideos = ({ data }) => {
  // Ensure data is an array before attempting to map
  if (!Array.isArray(data) || data.length === 0) {
    return <p>لا توجد فيديوهات لعرضها</p>;
  }

  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {data.map((item, index) => {
        const videoId = item.snippet?.resourceId?.videoId || item.id?.videoId;
        const title = item.snippet?.title || 'بدون عنوان';

        const formattedDate = item.snippet?.publishedAt
          ? new Date(item.snippet.publishedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : '';

        return (
          <div
            key={index}
            className='bg-white border-2 border-emerald-100 rounded-2xl p-4 shadow-sm flex flex-row flex-wrap gap-10 items-center justify-center hover:shadow-md transition-shadow dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='flex flex-col justify-center items-start w-full'>
                <h3 className='m-2 text-emerald-900 font-bold dark:text-slate-100'>{title}</h3>
                <p className='m-3 text-emerald-700 font-medium dark:text-slate-400'>{formattedDate}</p>
              </div>
              {videoId && (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='rounded-xl border border-emerald-100 shadow-md dark:border-slate-600'
                ></iframe>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayVideos;