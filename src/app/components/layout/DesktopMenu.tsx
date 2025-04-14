
'use client';


export default function MobileMenu() {

  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        <a href="/login" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
          Sign In/Up
        </a>
        <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
          Home
        </a>
      </div>
    </div>
  </div>
  );
}
