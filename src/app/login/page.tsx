// app/login/page.tsx
'use client';

import SlideShow from '../components/SlideShow';
import Auth from '../components/Auth';
import './styles.css';

export default function LoginPage() {
  return (
    <div className="test h-screen w-screen flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/2 h-full">
        <SlideShow />
      </div>
      <div className="w-full md:w-1/2 bg-white">
        <Auth />
      </div>
    </div>
  );
}