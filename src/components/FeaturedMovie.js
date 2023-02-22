import React from "react";
import "./FeaturedMovie.css";
import { FaPlay, FaPlus, FaSearch } from "react-icons/fa";

const FeaturedMovie = ({ item }) => {
  console.log(item);

  let firstDate = new Date(item.first_air_data);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured--description"></div>
          <div className="featured--button">
            <a href="/watch/${item.id}" className="featured--watchbutton">
              <FaPlay size={13} /> To attend
            </a>
            <a href="/list/add/${item.id}" className="featured--mylistbutton">
              <FaPlay size={13} /> My list
            </a>
          </div>
          <div className="featured--genres">
            <strong>genres:</strong> {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
