import React from 'react'

export default function Special() {
  return (
    <div className=' bg-[#f2f9fb] py-12'>
      {/* <div className='mx-auto flex justify-start items-center w-3/4'>
            <div className='border-2 py-4 text-center'>
                <h1 className='py-2'>স্বাধীনতার সুবর্ণজয়ন্তী কর্নার</h1>
                <p className='py-2'>বাংলাদেশের স্বাধীনতা ও বিজয় অর্জনের ৫০ বছর পূর্তি</p>
                <button className='py-2'>সুবর্ণজয়ন্তী কর্নার</button>
            </div>
            <div className='border-2 py-4 px-2'>
                <h1>জাতীর পিতার জন্মশতবার্ষিকী এবং স্বাধীনতার সুবর্ণজয়ন্তী উদযাপনের শুভ মুহূর্তে আসুন আমরা প্রতিজ্ঞা করি, সকল ভেদাভেদ ভুলে আমরা জনগণের মঙ্গলের জন্য কাজ করব।</h1>
                <h1>-মাননীয় প্রধানমন্ত্রী শেখ হাসিনা</h1>
            </div>
        </div> */}
      <div className='grid grid-cols-1 md:grid-cols-2 justify-start items-center md:w-[80%] mx-auto'>
        <div className='border-2 py-4 text-center'>
          <h1 className='py-2 text-xl font-bold text-[#bf8527]'>স্বাধীনতার সুবর্ণজয়ন্তী কর্নার</h1>
          <p className='py-2'>বাংলাদেশের স্বাধীনতা ও বিজয় অর্জনের ৫০ বছর পূর্তি</p>
          <button className='pb-2 bg-pink-500 text-white px-4 py-2 rounded-md text-[12px]'>সুবর্ণজয়ন্তী কর্নার</button>
        </div>
        <div className=' border-2 py-4 px-2'>
          <p className='py-2 text-sm font-bold'>জাতীর পিতার জন্মশতবার্ষিকী এবং স্বাধীনতার সুবর্ণজয়ন্তী উদযাপনের শুভ মুহূর্তে আসুন আমরা প্রতিজ্ঞা করি, সকল ভেদাভেদ ভুলে আমরা জনগণের মঙ্গলের জন্য কাজ করব।</p>
          <h1 className="text-xl text-[#19686d] py-2">-মাননীয় প্রধানমন্ত্রী শেখ হাসিনা</h1>
        </div>
      </div>
    </div>
  )
}
