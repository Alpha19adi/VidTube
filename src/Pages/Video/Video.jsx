import React from 'react'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId, categoryId} = useParams();

  return (
    <div className='play-container bg-[#f9f9f9] pl-[2%] pr-[2%] pt-[20px] pb-[20px] flex justify-between flex-wrap'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video