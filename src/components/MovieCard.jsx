

function MovieCard({show, onDetails}){
    const releaseYear = show.premiered? new Date(show.premiered).getFullYear():"N/A";


    return(
<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
<div className="movie-card h-100">
{show.image ? (<img src={show.image.medium}alt={show.name}className="movie-card-image" />): (
    <div className="movie-card-no-image">No Image Found</div>
)}
<div className="movie-card-body">
<h5 className="movie-card-title">{show.name}</h5>
<p className ="movie-card-year">{releaseYear}</p>
<p className="movie-card-rating">*{show.rating?.average || "N/A"}</p>
<button className="btn btn-primary w-100"onClick={() => onDetails(show)}>See Details</button>

</div>

</div>


</div>
    )
}
export default MovieCard;