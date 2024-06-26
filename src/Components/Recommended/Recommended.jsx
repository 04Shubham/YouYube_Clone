import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { value_converter, API_KEY } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`; 
    try {
      const response = await fetch(relatedVideoUrl);
      const data = await response.json();
      setApiData(data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className='recommended'>
      {apiData.map((item) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={item.id}>
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Recommended;
