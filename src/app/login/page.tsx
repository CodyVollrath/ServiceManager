// app/login/page.tsx
'use client';

import SlideShow from '../components/login/SlideShow';
import Auth from '../components/login/Auth';
import './styles.css';

export default function LoginPage() {
  return (
    <div className="h-screen flex">
      <div className="flex w-full h-full rounded-lg shadow-lg">
        {/* SlideShow Panel */}
        <div className="hidden md:flex slideShow items-center justify-center w-full h-full">
          <SlideShow />
        </div>

        {/* Auth Panel */}
        <div className="flex items-center justify-center w-full md:w-1/2 p-8 bg-gradient-to-r from-gray-400 to-slate-500">
          <Auth />
        </div>
      </div>
    </div>
  );
}
