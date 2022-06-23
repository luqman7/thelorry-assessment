import React from 'react'

function SongsList({title, band, year, downloaded}) {
  const downloadedSong = downloaded
    return (
      <div className="w-full flex items-center hover:scale-105 transition transform duration-200 ease-out">
        <div className={`${downloaded === false ? 'bg-red-500' : 'bg-green-500'} absolute w-2 h-12 lg:h-16  rounded-full`}></div>
      
        <div className='w-full h-24 lg:h-32 bg-white/10 rounded-3xl text-white flex items-center ml-1'>
          <div className='w-10/12 lg:w-11/12 h-full bg-black/30 rounded-3xl p-2 lg:p-5 flex items-center justify-between'>
            <div className=''>
              <p className='lg:text-lg text-sm'>{title}</p>
              <p className='lg:text-lg text-sm'>{band}</p>
              <p className='font-light text-sm'>{year}</p>
            </div>
              
            {
              downloadedSong && 
                <div className='hidden lg:block bg-green-300 text-black/70 rounded-2xl font-semibold py-1 px-5 text-xs lg:text-sm'>Already Download</div>
            }
            {
              !downloadedSong &&
                <div className='hidden lg:block border-red-400 border-2 text-red-400 rounded-2xl font-semibold py-1 px-5 text-xs lg:text-sm'>Not yet, Download now !</div>
            }
          </div>
          <div className='w-2/12 lg:w-1/12 space-x-2 flex items-center justify-center'>
              <div className='bg-white w-1 h-1 rounded-full'></div>
              <div className='bg-white w-1 h-1 rounded-full'></div>
              <div className='bg-white w-1 h-1 rounded-full'></div>
          </div>
        </div>
      </div>
    )
}

export default SongsList