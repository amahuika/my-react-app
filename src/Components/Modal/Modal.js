function Modal(props) {
  let userScore = props.movieDetails.vote_average;

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-start">
            <img src={props.poster} alt=".." width="150px" className="me-3" />

            <div className="">
              <h1>{props.movieDetails.title}</h1>
              <p>Released {props.movieDetails.release_date}</p>
              <p>User Score {userScore}/10</p>
            </div>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <h4>Overview</h4>
            <p>{props.movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
