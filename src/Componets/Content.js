import React, { useState } from 'react';
import axios from "axios";


const Content = () => {

  const [anime, setAnime] = useState({});
  const [index, setIndex] = useState(-1);
  const [previuos, setPreviuos] = useState([])

  const handleClick = () => {
    axios.get('https://animechan.vercel.app/api/random')
      .then(res => {
        // console.log(res.data)
        setPreviuos(previuos => [...previuos, res.data]);
        setIndex(previuosIndex => previuosIndex + 1);
        setAnime(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(previuosIndex => previuosIndex - 1);
      setAnime(previuos[index - 1])
    }
  };

  return (<div className="content">

    <div className="title">
      <h1>Get Random Anime</h1>
      <h2>Name:{anime.anime}</h2>
    </div>
    <div className="content-text">
      <div className='img' >

        {/* <img src='' alt='image' /> */}
        <h2>Character:{anime.character}</h2>
      </div>

      <div className='text'>
        <p>{anime.quote}</p>
      </div>
      <div className='navigate'>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleClick}>Get Random Anime</button>
      </div>
    </div>

  </div>);
}

export default Content;