import { Link } from "react-router-dom";
function NotFound(props) {
  return (
    <>
      <div>404 Not Found</div>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFound;
