import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="loader border-8 border-gray-300 border-t-blue-500 rounded-full w-10 h-10 animate-spin"></div>
    </div>
  );
}
