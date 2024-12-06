import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
            
            <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link to="/" className="text-white bg-purple-500 px-6 py-2 rounded-full font-semibold hover:bg-purple-600">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
