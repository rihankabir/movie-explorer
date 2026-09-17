import { useEffect,useState } from "react";
import { getAllShows, searchShows } from "../services/Movieapi";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies(){
    const [search, setSearch] = useState("");
const [shows, setShows] = useState([]);
const [selectedShow, setSelectedShow] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
    async function fetchShows() {
        try{
            const data = await getAllShows();
            setShows(data);

        } catch(error){
            setError("Failed to fetch movies");

        }finally{
            setLoading(false)
        }
    }
    fetchShows();
},[] )

async function handleSearch(event) {
    event.preventDefault();
    if(!search.trim()){
        return;
    }
try{
    setLoading(true);
    setError("");
    const data = await searchShows(search);
    setShows(data);
}catch(error){
setError("failed to search movies.");
}finally{
    setLoading(false);
}

}

if(loading){
    return(
        <div className="container py-5">
<h2>Loading Movies...</h2>
        </div>
    );
}
if(error){
    return(
        <div className="container py-5">
<h2>{error}</h2>
        </div>
    );
}


    return(
        <div className="container">
            <h1 className="mb-4">All Movies</h1>
            <form onSubmit={handleSearch}className="movie-search-form mb-5">
                <div className="input-group">
                    <input type="text"className="form-control"placeholder="search movies by title..."value={search}onChange={(event) => setSearch(event.target.value)} />
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
            <p>Total Movies:{shows.length}</p>
          <div className="row g-4">
{
    shows.slice(0,12).map((show) => (
       <MovieCard key={show.id}show={show}onDetails={() => {}}  />
 


    ))
}
          </div>
          <MovieModal show={selectedShow}onClose={() => setSelectedShow(null)} />

        </div>
    )
}
export default Movies;