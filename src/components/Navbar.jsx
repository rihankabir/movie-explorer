import { Link } from "react-router-dom";
function Navbar(){

    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="/">MovieExplorer</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link"to="/">Home</Link>
        <Link className="nav-link" to="/Movies">Movies</Link>
         <Link className="nav-link btn btn-success" to="/Movies">Explore Movies</Link>
        
      </div>
    </div>
  </div>
</nav>
    )
}
export default Navbar;