export default function LoadingDots() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-200"></div>
      <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-400"></div>
    </div>
  );
}
