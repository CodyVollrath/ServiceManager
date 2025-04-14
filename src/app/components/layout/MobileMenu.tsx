
'use client';

export default function MobileMenu() {

  return (
    <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="/login" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
        Sign In/Up
      </a>
      <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
        Home
      </a>
    </div>
    </div> 
  );
}
