import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <p className="text-4xl font-bold mb-4">Oops!</p>
            <button className="btn w-40">
            <Link to='/'>Go Back To Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;