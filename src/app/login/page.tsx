// app/login/page.tsx
'use client';

import SlideShow from '../components/SlideShow';
import Auth from '../components/Auth';
import './styles.css';

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="login-contianer flex w-full h-full max-w-5xl rounded-lg shadow-lg overflow-hidden">
        {/* SlideShow Panel */}
        <div className="flex slideShow items-center justify-center w-1/2 p-8">
          <SlideShow />
        </div>

        {/* Auth Panel */}
        <div className="flex authSide items-center justify-center w-1/2 p-8">
          <Auth />
        </div>
      </div>
    </div>
  );
}
