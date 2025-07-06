import NF from '../components/nf404'
import Navbar from '../components/Navbar';
const NotFound404 = () => {
  return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
        <NF />
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
    </div>
  );
}
export default NotFound404;