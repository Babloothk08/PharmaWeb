import React from 'react'

function Main() {
  return (
    <div className='flex flex-col min-w-full gap-5 py-10 justify-center px-[10%] bg-violet-900'>
        <div className='flex self-start'>
            <h1 className='md:text-3xl text-2xl pl-1 font-bold text-white'>Recent Collegium News</h1>
        </div>
        <div className='flex gap-5 flex-wrap rounded-2xl '>
            <div className='flex flex-col rounded-2xl md:w-90 justify-center p-3  gap-2 h-30 md:px-5 bg-white'>
                <p className='text-neutral-600'>October 10, 2025</p>
                <h2 className='items-center text-xl text-blue-700  cursor-pointer' >Collegium to Participate in Upcoming Investor Conferences</h2>
            </div>
            <div className='flex flex-col rounded-2xl md:w-90 justify-center p-3 gap-2 h-30 md:px-5 bg-white'>
                <p className='text-neutral-600'>October 10, 2025</p>
                <h2 className='items-center text-xl text-blue-700  cursor-pointer'>Collegium to Participate in Upcoming Investor Conferences</h2>
            </div>
            <div className='flex flex-col rounded-2xl md:w-90 justify-center p-3  gap-2 h-30 md:px-5 bg-white'>
                <p className='text-neutral-600'>October 10, 2025</p>
                <h2 className='items-center text-xl text-blue-700  cursor-pointer'>Collegium to Participate in Upcoming Investor Conferences</h2>
            </div>
        </div>
    </div>
  )
}

export default Main