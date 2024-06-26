import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SearchResults.css";
import { value_converter } from "../../data";
import { API_KEY } from "../../data";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  const fetchSearchResults = async () => {
    const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`;
    try {
      const response = await axios.get(searchUrl);
      setResults(response.data.items);
    } catch (error) {
      console.log("Error fetching search results", error);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      {results.map((item) => (
        <div className="search-result" key={item.id.videoId}>
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
          <div className="result-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} Views</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
