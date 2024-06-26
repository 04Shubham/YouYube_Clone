export const API_KEY = "AIzaSyDCN2CxKn4sJ7B2vX4eYKqSJXSWvjmkI9o";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } 
  else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } 
  else {
    return value;
  }
};

// import React, { useEffect, useState } from "react";
// import "./Feed.css";
// import { Link } from "react-router-dom";
// import moment from "moment";
// import axios from "axios";
// import { API_KEY } from "../../data";
// import { value_converter } from "../../data";

// const Feed = ({ category }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
//         );
//         setData(response.data.items); // Fixing this line
//       } catch (error) {
//         console.log("error fetching data", error);
//       }
//     };
//     fetchData();
//   }, [category]);

//   return (
//     <div className="feed">
//       {data.map((item, index) => ( // Fixing variable name from 'items' to 'item'
//         <Link
//           to={`video/${item.snippet.categoryId}/${item.id}`} // Fixing variable name from 'items' to 'item'
//           className="card"
//           key={index} // Adding a key for each item
//         >
//           <img src={item.snippet.thumbnails.medium.url} alt="" />
//           <h2>{item.snippet.title}</h2>
//           <h3>{item.snippet.channelTitle}</h3>
//           <p>
//             {value_converter(item.statistics.viewCount)} views &bull;{" "}
//             {moment(item.snippet.publishedAt).fromNow()}
//           </p>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Feed;

