interface ErrorDisplayProps {
  message?: string;
}

const ErrorDisplay = ({ message = 'An error occurred. Please try again.' }: ErrorDisplayProps) => (
  <div className="flex justify-center items-center h-screen">
    <div className="text-red-500 text-center">
      <svg 
        className="mx-auto h-12 w-12 mb-4" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
        />
      </svg>
      <p>{message}</p>
    </div>
  </div>
);

export default ErrorDisplay;
