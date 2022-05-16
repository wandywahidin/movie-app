import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../request'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowId={1} title='Up Comming' fetchUrl ={request.requestUpcoming}/>
      <Row rowId={2} title='Popular' fetchUrl ={request.requestPopular}/>
      <Row rowId={3} title='Trending' fetchUrl ={request.requestTrending}/>
      <Row rowId={4} title='Top Rated' fetchUrl ={request.requestTopRated}/>
      <Row rowId={5} title='Horor' fetchUrl ={request.requestHorror}/>
    </div>
  )
}

export default Home