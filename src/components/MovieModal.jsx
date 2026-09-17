function MovieModal({ show, onClose }) {
    if (!show) {
        return null;
    }

    const releaseDate = show.premiered
        ? new Date(show.premiered).toLocaleDateString()
        : "N/A";

    return (
        <div
            className="movie-modal-overlay"
            onClick={onClose}
        >
            <div
                className="movie-modal"
                onClick={(event) => event.stopPropagation()}
            >

                <button
                    type="button"
                    className="movie-modal-close"
                    onClick={onClose}
                >
                    &times;
                </button>

                <div className="row g-0">

                    <div className="col-md-5">

                        {show.image ? (
                            <img
                                src={
                                    show.image.original ||
                                    show.image.medium
                                }
                                alt={show.name}
                                className="movie-modal-image"
                            />
                        ) : (
                            <div className="movie-modal-no-image">
                                No Image
                            </div>
                        )}

                    </div>

                    <div className="col-md-7">

                        <div className="movie-modal-content">

                            <h2>{show.name}</h2>

                            <p>
                                ⭐ Rating:{" "}
                                {show.rating?.average || "N/A"}
                            </p>

                            <p>
                                📅 Release Date: {releaseDate}
                            </p>

                            <p>
                                🎭 Genres:{" "}
                                {show.genres?.length
                                    ? show.genres.join(", ")
                                    : "N/A"}
                            </p>

                            <div
                                className="movie-summary"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        show.summary ||
                                        "No summary available."
                                }}
                            />

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default MovieModal;