import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className='notFoundPageWrapper'>
            <p>Page doesn't exist</p>
            <Link to="/">Back to main page</Link>
        </div>
    );
};

export default NotFoundPage;