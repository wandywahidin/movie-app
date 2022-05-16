import React, {useState, useEffect} from 'react'
import axios from 'axios'
import request from '../request';

const Main = () => {
    const [movies, setmovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
      axios.get(request.requestPopular).then((response) => {
          setmovies(response.data.results)
      })
    }, [])

    const truncateString = (str, num) => {
      if(str?.length > num) {
        return str.slice(0, num) + "..."
      } else {
        return str
      }
    }
  return (
    <div className='w-full h-[550px] text-white'>
        <div className="w-full h-full">
            <div className='w-full h-[550px] absolute bg-gradient-to-r from-black '></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
        <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold my-5'>{movie?.title}</h1>
            <div className='my-4'>
                <button className='border font-semibold text-black bg-white border-gray-300 px-5 py-2'>Play</button>
                <button className='border border-gray-300 px-5 py-2 ml-4'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Released : {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview , 150)}</p>
        </div>

    </div>
  )
}

export default Main