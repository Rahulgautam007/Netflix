import React, { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import { BiPlay } from "react-icons/bi";
import { GoPlus } from "react-icons/go";

function Home() {

  const apiKey = "b130d5192dd5201f54184d52dd2bb717";
  const url = "https://api.themoviedb.org/3";
  const imageUrl = "https://image.tmdb.org/t/p/original";

  const [popularMovie, setPopularMovie] = useState([]);
  const [upcomingMovie, setUpComingMovie] = useState([]);
  const [topratedMovie, setTopRatedMovie] = useState([]);
  const [nowplayingMovie, setNowPlayingMovie] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
      setPopularMovie(results);
    };
    const fetchUpComing = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/upcoming?api_key=${apiKey}`);
      setUpComingMovie(results);
    };
    const fetchTopRated = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/top_rated?api_key=${apiKey}`);
      setTopRatedMovie(results);
    };
    const fetchNowPlaying = async () => {
      const { data: { results } } = await axios.get(`${url}/movie/now_playing?api_key=${apiKey}`);
      setNowPlayingMovie(results);
    };
    fetchPopular();
    fetchNowPlaying();
    fetchTopRated();
    fetchUpComing();
  }, []);

  const Card = ({ img }) => {
    return <img className='card' src={img} alt="" />;
  };

  const Row = ({ title, arr = [] }) => {
    return (
      <div className='row'>
        <h2>{title}</h2>
        <div className="row__posters">
          {arr.map((item, index) => (
            <Card key={index} img={`${imageUrl}/${item.poster_path}`} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className='home'>
      <div
        className="banner"
        style={{
          backgroundImage: popularMovie.length > 0
            ? `url(${imageUrl}/${popularMovie[0].poster_path})`
            : 'rgb(16, 16, 16)'
        }}
      >
        {popularMovie[0] &&<h1>{popularMovie[0].original_title}</h1>}
       {popularMovie[0] && <p>{popularMovie[0].overview}</p>}

      <div>
      <button><BiPlay/>Play</button>
      <button>List<GoPlus /></button>
      </div>
      </div>
      <Row title={"Popular on Netflix"} arr={popularMovie} />
      <Row title={"UpComing Movies"} arr={upcomingMovie} />
      <Row title={"Top Rated"} arr={topratedMovie} />
      <Row title={"Now Playing"} arr={nowplayingMovie} />
    </section>
  );
}

export default Home;
