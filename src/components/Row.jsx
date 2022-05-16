import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title , fetchUrl, rowId}) => {
    const [movies, setmovies] = useState([])

    useEffect(() => {
      axios.get(fetchUrl).then((response) => {
          setmovies(response.data.results)
      })
    }, [fetchUrl])

    const slideRight = ()=> {
        const slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const slideLeft = ()=> {
        const slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl py-4'>{title}</h2>
        <div className="relative flex items-center group">
            <MdChevronRight onClick={slideRight} size={20} className='bg-white rounded-full absolute  right-0 opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
            <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => {
                    return (
                    <Movie key={id} item={item}/>
                    )  
                })}
            </div>
            <MdChevronLeft onClick={slideLeft} size={20} className='bg-white rounded-full absolute left-0 opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>
    </div>
  )
}

export default Row