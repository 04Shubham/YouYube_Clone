import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/logos/like.png';
import dislike from '../../assets/logos/dislike.png';
import share from '../../assets/logos/share.png';
import save from '../../assets/logos/save.png';
import moment from 'moment';
import { API_KEY, value_converter } from '../../data';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      try {
        const response = await fetch(videoDetails_url);
        const data = await response.json();
        setApiData(data.items[0]);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      const fetchOtherData = async () => {
        // Fetching Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        try {
          const response = await fetch(channelData_url);
          const data = await response.json();
          setChannelData(data.items[0]);
        } catch (error) {
          console.error("Error fetching channel data:", error);
        }

        // Fetching Comment Data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        try {
          const response = await fetch(comment_url);
          const data = await response.json();
          setCommentData(data.items);
        } catch (error) {
          console.error("Error fetching comment data:", error);
        }
      };

      fetchOtherData();
    }
  }, [apiData, videoId]);

  return (
    <div className='play-video'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
        <div>
          <span><img src={like} alt="Like" />{apiData ? value_converter(apiData.statistics.likeCount) : 155}</span>
          <span><img src={dislike} alt="Dislike" /></span>
          <span><img src={share} alt="Share" />Share</span>
          <span><img src={save} alt="Save" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="Publisher" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}</p>
        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 130} Comments</h4>
        {commentData.map((item, index) => (
          <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="User Profile" />
            <div>
              <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt="Like" />
                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="Dislike" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayVideo;
