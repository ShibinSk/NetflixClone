import React, { useEffect, useState } from "react";
import "./RowPost.css";
import {imageUrl,API_KEY} from "../../consents/constents";
import axios from "../../axios";
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,seturlID]=useState('')
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        

        setMovies(response.data.results);
      })
      .catch((err) => {});
  });

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    
            if(response.data.results.length!==0){

              seturlID(response.data.results[0])

            }else{
              console.log("Not Available yet");
            }
    })
    console.log(id);
  }
  return (
    <div className="row">
      <h2>{props.title }</h2>
      <div className="posters" >
        {movies?.map((obj) => {
          return <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path }`} alt="" />;
        })}
      </div>
      {
       urlId && 
      <YouTube videoId={urlId.key} opts={opts} />
      }
    </div>
  );
}

export default RowPost;
