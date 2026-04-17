import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <p className="text-6xl font-bold text-gray-200 mb-4">404</p>
      <h1 className="text-xl font-semibold text-gray-700 mb-2">Page not found</h1>
      <p className="text-gray-400 text-sm mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 text-sm hover:underline">
        Go to Dashboard
      </Link>
    </div>
  )
}
