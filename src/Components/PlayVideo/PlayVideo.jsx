/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, valueConverter, valueConverterForLikes } from '../../data'
import moment from 'moment';
import { useParams } from 'react-router-dom'
const PlayVideo = () => {
    
    const { videoId } = useParams();

    const [apiData, setApiData] = useState("");
    const [channelData, setchannelData] = useState("");
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
            .then(res => res.json().then(data => setApiData(data.items[0])))
    }
    const fetchchannelData = async () => {
        await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`)
            .then(res => res.json().then(data => setchannelData(data.items[0])))
    }
    const fetchCommentData = async () => {
        await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`)
            .then(res => res.json().then(data => setCommentData(data.items)))
    }


    useEffect(() => {
        fetchVideoData();
    }, [videoId])
    useEffect(() => {
        fetchchannelData();
    }, [apiData])
    useEffect(() => {
        fetchCommentData();
    }, [])

    return (
        <div className='play-video flex-bas'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info w-full flex items-center justify-between flex-wrap text-sm mt-3 text-[#5a5a5a]">
                <p>{apiData ? valueConverter(apiData.statistics.viewCount) : "Views Here"}&bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : 'Published Date'}</p>
                <div>
                    <span><img src={like} alt="" />{apiData ? valueConverterForLikes(apiData.statistics.likeCount) : "Likes Here"}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr className='border-0 h-[1px] bg-[#ccc] my-[10px]' />
            <div className='publisher flex items-center mt-5'>
                <img src={channelData ? channelData.snippet.thumbnails.default.url : { jack }} alt="" />
                <div>
                    <p className='text-black font-semibold text-[16px]'>{apiData ? apiData.snippet.channelTitle : "Channel name here"}</p>
                    <span className='text-sm text-[#5a5a5a]'>{channelData ? valueConverterForLikes(channelData.statistics.subscriberCount) : ""} Subscribers</span>
                </div>
                <button className='bg-red-600 text-white px-[30px] py-[8px] border-0 outline-0 rounded cursor-pointer'>Subscribe</button>
            </div>
            <div>
                <div className="video-description pl-14 my-4">
                    <p className='text-sm mb-[5px] text-[#5a5a5a]'>{apiData ? apiData.snippet.description.slice(0, 260) : "Description here"}</p>
                    <hr />
                    <h4 className='text-sm text-[#5a5a5a] mt-4'>{apiData ? valueConverterForLikes(apiData.statistics.commentCount) : "Comments here"} Comments</h4>
                    {commentData.map((items, index) => {
                        return (
                            <div key={index} className='comment'>
                                <img className='w-9 rounded-[50%] mr-4' src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                                <div>
                                    <h3 className='text-[14px] mb-[2px]'>{items.snippet.topLevelComment.snippet.authorDisplayName.slice(1,)}<span className='text-xs text-[#5a5a5a] font-medium ml-2'>1 decade ago</span></h3>
                                    <p>{items.snippet.topLevelComment.snippet.textDisplay}</p>
                                    <div className='comment-action flex items-center my-2 text-[14px]'>
                                        <img src={like} alt="" />
                                        <span>{valueConverterForLikes(items.snippet.topLevelComment.snippet.likeCount)}</span>
                                        <img src={dislike} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default PlayVideo