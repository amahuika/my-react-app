import "./DisplayMovies.css";

function DisplayMovies(props) {
  const modalHandler = () => {
    props.onShowDetails(props.id);
  };

  return (
    <div className="col-lg-3 col-4 my-4">
      <div className="card">
        <div className="">
          <img src={props.poster} className="card-img-top" alt="Movie Poster" />
          <div className="card-body bg-light">
            <h5 className="card-title">{props.title}</h5>
            <hr />
            <p className="card-text">Released: {props.year}</p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={modalHandler}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayMovies;
