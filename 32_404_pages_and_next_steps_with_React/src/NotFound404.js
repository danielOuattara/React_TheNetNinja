import { Link } from "react-router-dom";

const NotFound404 = () => {
    return ( 
        <div className="not-found">
            <h2>404 </h2>
            <p>page not found....</p>
            <Link to="/"> Back to home</Link>

        </div>
     );
}
 
export default NotFound404;