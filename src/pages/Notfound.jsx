'use client';


import { RiAlarmWarningFill, RiHome5Line, RiArrowLeftLine } from 'react-icons/ri';
import { useNavigate } from 'react-router';

export default function Notfoundpage() {
    const navigate = useNavigate();

    return (
        <main className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
            <section className='relative overflow-hidden'>
                {/* Decorative elements */}
                <div className='absolute inset-0 overflow-hidden'>
                    <div className='absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-100 opacity-40 blur-3xl' />
                    <div className='absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-100 opacity-40 blur-3xl' />
                </div>

                <div className='layout relative flex min-h-screen flex-col items-center justify-center px-4 text-center'>
                    {/* Icon with animation */}
                    <div className='relative mb-8'>
                        <div className='absolute inset-0 animate-ping rounded-full bg-red-400 opacity-20' />
                        <div className='relative rounded-full bg-white p-6 shadow-2xl'>
                            <RiAlarmWarningFill
                                size={80}
                                className='animate-flicker text-red-500 drop-shadow-glow'
                            />
                        </div>
                    </div>

                    {/* 404 Text */}
                    <div className='mb-6'>
                        <h1 className='mb-2 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl'>
                            404
                        </h1>
                        <div className='mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-300' />
                    </div>

                    {/* Message */}
                    <h2 className='mb-4 text-2xl font-bold text-slate-800 md:text-4xl'>
                        Page Not Found
                    </h2>
                    <p className='mb-12 max-w-md text-slate-600 md:text-lg'>
                        Không có gì trong này cả bạn ơi
                    </p>

                    {/* Action buttons */}
                    <div className='flex flex-col gap-4 sm:flex-row'>
                        <button
                            onClick={() => navigate('/')}
                            className='group flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-700 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            <RiArrowLeftLine className='transition-transform group-hover:-translate-x-1' />
                            Go Back
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className='group flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700 hover:shadow-xl'
                        >
                            <RiHome5Line className='transition-transform group-hover:scale-110' />
                            Back to Home
                        </button>
                    </div>

                    {/* Helpful links */}
                    <div className='mt-16'>
                        <p className='mb-4 text-sm font-medium uppercase tracking-wider text-slate-500'>
                            Quick Links
                        </p>
                        <div className='flex flex-wrap justify-center gap-4 text-sm'>
                            <a
                                href='#'
                                className='text-slate-600 transition-colors hover:text-red-500'
                            >
                                Help Center
                            </a>
                            <span className='text-slate-300'>•</span>
                            <a
                                href='#'
                                className='text-slate-600 transition-colors hover:text-red-500'
                            >
                                Contact Support
                            </a>
                            <span className='text-slate-300'>•</span>
                            <a
                                href='#'
                                className='text-slate-600 transition-colors hover:text-red-500'
                            >
                                Report Issue
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}







// export default function Notfoundpage(params) {
//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-slate-50 ">

//             <img src="404_NotFound.png" alt="notfound" className="max-w-full mb-6 w-100" />

//             <p className="text-xl font-semibold">KHÔNG CÓ GÌ TRONG TRANG NÀY CẢ 404 RỒI </p>

//         </div>

//     )
// }
// <a href="/" className=" mt-5 inline-block px-6 py-3 text-white font-medium transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark">Quay về trang chủ</a>