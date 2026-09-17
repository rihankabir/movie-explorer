import { Link } from "react-router-dom";
import Herobgimage from "../assets/hero-image.jpg";
function Hero(){

return(
    <section className="Hero-section" style={{backgroundImage:`url(${Herobgimage})`}}>
<div className="container">
    <div className="row align-items-center">
        <div className="col-lg-7">
<p className="hero-sub">
    Welcome To MovieExplorer
</p>
<h1 className="hero-title">Discover Your Next <span>Favourite Movie</span></h1>
<p className="hero-desc">Explore thousands of Movies and Shows</p>
<Link to="/Movies" className="btn btn-primary btn-lg px-4 py-3 hero-button">Explore Movies</Link>


        </div>
    </div>
</div>
    </section>
)

}
export default Hero;