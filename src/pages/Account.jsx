import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/8d0e653f-b4fc-44d2-88fe-41aa041eae72/ID-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px] '></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
    </div>
    <SavedShows/>
    </>
  )
}

export default Account