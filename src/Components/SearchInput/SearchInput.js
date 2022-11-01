<<<<<<< HEAD
import "./SearchInput.css";

function SearchInput(props) {
  const changeHandle = (e) => {
    props.onChangeHandler(e.target.value);
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="Search for a movie..."
          value={props.input}
          onChange={changeHandle}
        />
      </div>
    </div>
  );
}

export default SearchInput;
=======
function SearchInput() {
  return (
    <div>
      <form>
        <label></label>
        <input type="text" />
      </form>
    </div>
  );
}
>>>>>>> d9d5e83b84a8f384d246f5dd35fee688f487a0cc
