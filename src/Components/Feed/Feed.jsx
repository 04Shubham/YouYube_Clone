import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { API_KEY } from "../../data";
import { value_converter } from "../../data";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    try {
      const response = await axios.get(videoListUrl);
      setData(response.data.items);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item) => (
        <Link
          to={`/video/${item.snippet.categoryId}/${item.id}`}
          className="card"
          key={item.id}
        >
          <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <div className="card-content">
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
