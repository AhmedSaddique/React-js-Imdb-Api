
import './App.css';
import {useState , useEffect} from 'react';


function App() {


  let[movieName, infomovieName]=useState(null);
  let[movieTitle , infomovieTitle]=useState('The avengers')

  useEffect(()=>{
    getmovieName()
  },[])

  function setmovieTitle(value){
    infomovieTitle(value);
  }

  function getmovieName(){
    let url=`http://www.omdbapi.com/?t=${movieTitle}&apikey=fe3ca052`;
    fetch(url)
    .then((Response)=>Response.json())
    .then((data)=>{
      console.log(data);
      infomovieName(data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div >
      <h1 className="H1-movie">Movie Website</h1>

     <div className="container">
      <div>
        <input className="search-field" onChange={((event)=>(setmovieTitle(event.target.value)))} type="text"  placeholder="Search movies"></input>
      </div>
      <div>
        <button className="btn" onClick={getmovieName} >Search</button>
      </div>
    </div>
{ 
    movieName?.Error===undefined?(
    <div className="container1">

      <div className="poster">
      <img src={movieName?.Poster} className="img-size"></img>
      </div>
      
      <div className="info">
        <div >
        <h3 >Title: {movieName?.Title}</h3>
        <p ><strong>Genre: </strong> {movieName?.Genre}</p>
        <p><strong>Director: </strong> {movieName?.Director}</p>
        <p><strong>Plot: </strong> {movieName?.Plot}</p>
        <p><strong>Actors: </strong> {movieName?.Actors}</p>
        <p><strong>BoxOffice: </strong> {movieName?.BoxOffice}</p>
        <p><strong>Language: </strong> {movieName?.Language}</p>
        <p><strong>Release: </strong> {movieName?.Release}</p>
        <p><strong>Runtime: </strong> {movieName?.Runtime}</p>

    </div>
    <div className="rating">
{
    movieName?.Ratings.map((rating , index)=>(

   
          <div>
          <strong> {rating.Source} </strong>
          <h3> {rating.Value}</h3>
          </div>
 ))
}
</div>
        </div>
    </div>
  ):
  (
    <h1 className="text">Movie not found</h1>
  )
  }
   </div>

  );
}

export default App;
