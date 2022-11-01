import axios from "axios";
const apiUrl = "https://www.omdbapi.com/?apikey=9189dcef";

function Api(props) {
  let searchUrl = apiUrl + "&s=" + props.search;

  const client = axios.create({ baseURL: searchUrl });
}

export default Api;
