export default function AuthorProfile() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-800 antialiased pb-12 dark:bg-slate-900 dark:text-slate-100'>
      <header className='bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white shadow-lg border-b-4 border-emerald-600 dark:border-emerald-500'>
        <div className='max-w-5xl mx-auto px-6 py-10'>
          <div className='text-center md:text-right'>
            <span className='inline-block bg-emerald-700/60 text-emerald-100 text-sm font-semibold px-4 py-1 rounded-full mb-3 border border-emerald-500/30'>
              السيرة الذاتية والإنتاج العلمي
            </span>
            <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2'>
              عراقي محمود سيد حامد
            </h1>
            <p className='text-emerald-100 text-lg font-medium dark:text-emerald-200'>
              باحث في علوم الشريعة الإسلامية | إمام وخطيب بمحافظة القاهرة
            </p>
          </div>
        </div>
      </header>

      <main className='max-w-5xl mx-auto px-4 md:px-6 mt-8 space-y-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <section className='bg-white rounded-xl shadow-sm border border-emerald-100 p-6 hover:shadow-md transition-shadow dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50'>
            <div className='border-b border-emerald-100 pb-3 mb-4 flex items-center justify-between dark:border-slate-600'>
              <h2 className='text-xl font-bold text-emerald-900 dark:text-slate-100'>
                البيانات الشخصية
              </h2>
              <span className='w-2 h-6 bg-emerald-600 rounded-full inline-block'></span>
            </div>
            <dl className='space-y-3 text-slate-700 dark:text-slate-300'>
              <div className='flex flex-col sm:flex-row sm:justify-between border-b border-slate-50 pb-2 dark:border-slate-700'>
                <dt className='font-semibold text-emerald-800 dark:text-emerald-300'>
                  الاسم الكامل:
                </dt>
                <dd className='text-slate-900 font-medium dark:text-slate-100'>
                  عراقي محمود سيد حامد
                </dd>
              </div>
              <div className='flex flex-col sm:flex-row sm:justify-between border-b border-slate-50 pb-2 dark:border-slate-700'>
                <dt className='font-semibold text-emerald-800 dark:text-emerald-300'>محل الميلاد:</dt>
                <dd className='text-slate-900 dark:text-slate-100'>
                  بَرَكة الحاج – المرج – القاهرة – مصر
                </dd>
              </div>
              <div className='flex flex-col sm:flex-row sm:justify-between'>
                <dt className='font-semibold text-emerald-800 dark:text-emerald-300'>
                  العمل الحالي:
                </dt>
                <dd className='text-slate-900 dark:text-slate-100'>
                  إمام وخطيب ومدرس بأوقاف القاهرة
                </dd>
              </div>
            </dl>
          </section>

          <section className='bg-white rounded-xl shadow-sm border border-emerald-100 p-6 hover:shadow-md transition-shadow dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50'>
            <div className='border-b border-emerald-100 pb-3 mb-4 flex items-center justify-between dark:border-slate-600'>
              <h2 className='text-xl font-bold text-emerald-900 dark:text-slate-100'>
                المؤهلات الدراسية
              </h2>
              <span className='w-2 h-6 bg-emerald-600 rounded-full inline-block'></span>
            </div>
            <ul className='space-y-3 text-slate-700 dark:text-slate-300'>
              <li className='bg-emerald-50/50 p-3 rounded-lg border-r-4 border-emerald-600 dark:bg-slate-700/50'>
                <span className='block font-bold text-emerald-900 text-sm dark:text-slate-100'>
                  الإجازة العالية (ليسانس)
                </span>
                <span className='text-sm text-slate-700 dark:text-slate-300'>
                  الدراسات الإسلامية والعربية – جامعة الأزهر
                </span>
              </li>
              <li className='bg-emerald-50/50 p-3 rounded-lg border-r-4 border-emerald-600 dark:bg-slate-700/50'>
                <span className='block font-bold text-emerald-900 text-sm dark:text-slate-100'>
                  الدراسات العليا
                </span>
                <span className='text-sm text-slate-700 dark:text-slate-300'>
                  تمهيدي التخصص (الماجستير) – قسم تحقيق التراث – معهد البحوث
                  والدراسات العربية (وجاري الإعداد للماجستير)
                </span>
              </li>
            </ul>
          </section>
        </div>

        <section className='bg-white rounded-xl shadow-sm border border-emerald-100 p-6 dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50'>
          <div className='border-b border-emerald-100 pb-3 mb-4 flex items-center justify-between dark:border-slate-600'>
            <h2 className='text-xl font-bold text-emerald-900 dark:text-slate-100'>
              مجال الخبرات والعمل الشرعي
            </h2>
            <span className='w-2 h-6 bg-emerald-600 rounded-full inline-block'></span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex items-start space-x-3 space-x-reverse bg-slate-50 p-4 rounded-lg border border-slate-100 dark:bg-slate-700/50 dark:border-slate-600'>
              <div className='w-2 h-2 mt-2 bg-emerald-600 rounded-full shrink-0'></div>
              <div>
                <h3 className='font-bold text-slate-900 dark:text-slate-100'>
                  مراجعة المحتوى التعليمي
                </h3>
                <p className='text-sm text-slate-600 mt-1 dark:text-slate-400'>
                  مسؤول مراجعة المحتوى التعليمي لجامعة المدينة العالمية.
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-3 space-x-reverse bg-slate-50 p-4 rounded-lg border border-slate-100 dark:bg-slate-700/50 dark:border-slate-600'>
              <div className='w-2 h-2 mt-2 bg-emerald-600 rounded-full shrink-0'></div>
              <div>
                <h3 className='font-bold text-slate-900 dark:text-slate-100'>
                  البحث العلمي واللغوي
                </h3>
                <p className='text-sm text-slate-600 mt-1 dark:text-slate-400'>
                  باحث شرعي ولغوي بعدد من دور النشر الكبرى.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-white rounded-xl shadow-sm border border-emerald-100 p-6 dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50'>
          <div className='border-b border-emerald-100 pb-4 mb-6 dark:border-slate-600'>
            <h2 className='text-2xl font-bold text-emerald-900 dark:text-slate-100'>
              الإنتاج العلمي
            </h2>
          </div>

          <div className='mb-8'>
            <h3 className='text-lg font-bold text-emerald-800 mb-4 pb-1 border-b border-slate-100 flex items-center dark:text-slate-200 dark:border-slate-600'>
              <span className='w-2 h-2 bg-emerald-700 rounded-full inline-block ml-2'></span>
              أولا: المؤلفات والكتب
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              <div className='p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between dark:bg-slate-700/50 dark:border-slate-600'>
                <h4 className='font-bold text-emerald-900 text-lg dark:text-slate-100'>
                  عبودية الحب
                </h4>
                <span className='text-xs font-semibold text-emerald-700 mt-2 block dark:text-emerald-400'>
                  دار المنهاج
                </span>
              </div>
              <div className='p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between dark:bg-slate-700/50 dark:border-slate-600'>
                <h4 className='font-bold text-emerald-900 text-lg dark:text-slate-100'>
                  معالم الرحمة في أخلاق النبي ﷺ
                </h4>
                <span className='text-xs font-semibold text-emerald-700 mt-2 block dark:text-emerald-400'>
                  دار المنهاج
                </span>
              </div>
              <div className='p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between dark:bg-slate-700/50 dark:border-slate-600'>
                <h4 className='font-bold text-emerald-900 text-lg dark:text-slate-100'>
                  معالم رحمة النبي ﷺ بأسرته
                </h4>
                <span className='text-xs font-semibold text-emerald-700 mt-2 block dark:text-emerald-400'>
                  دار المنهاج
                </span>
              </div>
              <div className='p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between dark:bg-slate-700/50 dark:border-slate-600'>
                <h4 className='font-bold text-emerald-900 text-lg dark:text-slate-100'>
                  إلى دعاة التقريب: انتظروا الذبح!
                </h4>
                <span className='text-xs font-semibold text-emerald-700 mt-2 block dark:text-emerald-400'>
                  دار المنهاج
                </span>
              </div>
              <div className='p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between dark:bg-slate-700/50 dark:border-slate-600'>
                <h4 className='font-bold text-emerald-900 text-lg dark:text-slate-100'>
                  المجددون الرويبضات
                </h4>
                <span className='text-xs font-semibold text-emerald-700 mt-2 block dark:text-emerald-400'>
                  دار المنهاج
                </span>
              </div>
              <div className='p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between dark:bg-slate-700/50 dark:border-slate-600'>
                <h4 className='font-bold text-emerald-900 text-lg dark:text-slate-100'>
                  استعل بدينك
                </h4>
                <span className='text-xs font-semibold text-emerald-700 mt-2 block dark:text-emerald-400'>
                  دار المنهاج
                </span>
              </div>
              <div className='p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between dark:bg-slate-700/50 dark:border-slate-600'>
                <h4 className='font-bold text-emerald-900 text-lg dark:text-slate-100'>
                  صحيح الآداب والأخلاق
                </h4>
                <span className='text-xs font-semibold text-emerald-700 mt-2 block dark:text-emerald-400'>
                  دار ابن حزم
                </span>
              </div>
              <div className='p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between dark:bg-slate-700/50 dark:border-slate-600'>
                <h4 className='font-bold text-emerald-900 text-lg dark:text-slate-100'>
                  دروس وعظات من حياة أمهات المؤمنين الطاهرات
                </h4>
                <span className='text-xs font-semibold text-slate-500 mt-2 block dark:text-slate-400'>
                  مؤلف مستقل
                </span>
              </div>
              <div className='p-4 rounded-lg bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between dark:bg-slate-700/50 dark:border-slate-600'>
                <h4 className='font-bold text-emerald-900 text-lg dark:text-slate-100'>
                  الأذكار النبوية (كتيب)
                </h4>
                <span className='text-xs font-semibold text-slate-500 mt-2 block dark:text-slate-400'>
                  مؤلف مستقل
                </span>
              </div>
            </div>

            <div className='mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200 dark:bg-slate-700/50 dark:border-slate-600'>
              <span className='font-bold text-slate-800 text-sm dark:text-slate-200'>
                بحث علمي:
              </span>
              <span className='text-sm text-slate-700 dark:text-slate-300'>
                {' '}
                قراءة في كتاب "قطوف أدبية" لعبد السلام هارون.
              </span>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-bold text-emerald-800 mb-4 pb-1 border-b border-slate-100 flex items-center dark:text-slate-200 dark:border-slate-600'>
              <span className='w-2 h-2 bg-emerald-700 rounded-full inline-block ml-2'></span>
              ثانيا: التحقيق والدراسات التراثية
            </h3>
            <div className='space-y-3'>
              <div className='p-4 rounded-lg border border-slate-200 bg-white hover:border-emerald-300 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:hover:border-emerald-400'>
                <h4 className='font-bold text-slate-900 text-lg dark:text-slate-100'>
                  تحقيق كتاب "تحفة الذاكرين" للشوكاني
                </h4>
                <p className='text-sm text-emerald-700 mt-1 font-medium dark:text-emerald-400'>
                  نشر دار الفاروق للاستثمارات الثقافية
                </p>
              </div>

              <div className='p-4 rounded-lg border border-slate-200 bg-white hover:border-emerald-300 transition-colors dark:bg-slate-800 dark:border-slate-600 dark:hover:border-emerald-400'>
                <h4 className='font-bold text-slate-900 text-lg dark:text-slate-100'>
                  تحقيق ودراسة "الثغور الباسمة في فضائل السيدة فاطمة" للسيوطي
                </h4>
                <p className='text-sm text-slate-600 mt-1 dark:text-slate-400'>
                  تمت التحقيق والدراسة على ثلاث نسخ خطية.
                </p>
                <p className='text-sm text-emerald-700 font-medium mt-1 dark:text-emerald-400'>
                  نشر دار المنهاج
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <section className='bg-white rounded-xl shadow-sm border border-emerald-100 p-6 dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50'>
            <div className='border-b border-emerald-100 pb-3 mb-4 flex items-center justify-between dark:border-slate-600'>
              <h2 className='text-xl font-bold text-emerald-900 dark:text-slate-100'>
                المقالات المنشورة
              </h2>
              <span className='w-2 h-6 bg-emerald-600 rounded-full inline-block'></span>
            </div>
            <p className='text-xs text-slate-500 mb-3 dark:text-slate-400'>
              مقالات شرعية ولغوية وأدبية بموقع الألوكة:
            </p>
            <ul className='space-y-2 text-sm text-slate-700 dark:text-slate-300'>
              <li className='p-2.5 rounded bg-slate-50 border-r-2 border-emerald-600 dark:bg-slate-700/50 dark:border-emerald-500'>
                <span className='font-bold text-slate-900 dark:text-slate-100'>
                  مقال: "عبودية الحب"
                </span>
                <span className='block text-xs text-emerald-700 font-semibold mt-0.5 dark:text-emerald-400'>
                  فاز بجائزة أفضل كاتب بموقع الألوكة على شبكة الإنترنت.
                </span>
              </li>
              <li className='p-2 rounded bg-slate-50 dark:bg-slate-700/50'>
                مقال: "ورحل ثالث الأئمة الأعلام"
              </li>
              <li className='p-2 rounded bg-slate-50 dark:bg-slate-700/50'>
                مقال: "الضاد تصرخ: لم تلحنون؟!"
              </li>
              <li className='p-2 rounded bg-slate-50 dark:bg-slate-700/50'>
                مقال: "العبيد بين الشكران والجحود"
              </li>
            </ul>
          </section>

          <section className='bg-white rounded-xl shadow-sm border border-emerald-100 p-6 dark:bg-slate-800 dark:border-slate-600 dark:shadow-slate-900/50'>
            <div className='border-b border-emerald-100 pb-3 mb-4 flex items-center justify-between dark:border-slate-600'>
              <h2 className='text-xl font-bold text-emerald-900 dark:text-slate-100'>
                المؤتمرات والبرامج الفضائية
              </h2>
              <span className='w-2 h-6 bg-emerald-600 rounded-full inline-block'></span>
            </div>
            <div className='space-y-4 text-sm text-slate-700 dark:text-slate-300'>
              <div className='p-3 rounded bg-emerald-50/50 border border-emerald-100 dark:bg-slate-700/50 dark:border-slate-600'>
                <h3 className='font-bold text-emerald-900 mb-1 dark:text-slate-100'>
                  المشاركات العلمية بالمؤتمرات
                </h3>
                <p className='text-slate-700 leading-relaxed dark:text-slate-300'>
                  شارك ببحث{' '}
                  <span className='font-semibold text-emerald-800 dark:text-emerald-300'>
                    "معالم الرحمة في أخلاق النبي ﷺ"
                  </span>{' '}
                  في مؤتمر (نبي الرحمة) الدولي، والذي أجارته الجمعية العلمية
                  السعودية للسنة وعلومها (سنن)، وطبع ضمن فعاليات المؤتمر.
                </p>
              </div>

              <div className='p-3 rounded bg-emerald-50/50 border border-emerald-100 dark:bg-slate-700/50 dark:border-slate-600'>
                <h3 className='font-bold text-emerald-900 mb-1 dark:text-slate-100'>
                  البرامج الفضائية
                </h3>
                <p className='text-slate-700 leading-relaxed dark:text-slate-300'>
                  سجل برنامج{' '}
                  <span className='font-semibold text-emerald-800 dark:text-emerald-300'>
                    "أمهات المؤمنين"
                  </span>{' '}
                  لقناة المعالي الفضائية (26 حلقة)، متوفر للعرض على شبكة
                  الإنترنت.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
