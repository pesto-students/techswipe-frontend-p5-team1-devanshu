import React from "react";

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  console.log("came to error fallback");
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
