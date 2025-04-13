import {useState, useEffect} from 'react';

type Slide = {
    id: number,
    title: string,
    description: string,
    background: string,
};

const defaultSlides: Slide[] = [
    {
        id: 1,
        title: "Welcome to ServiceBucket",
        description: "Let us handle your project dependencies. You focus on the business needs!",
        background: "bg-[url('/images/service_bundle.png')]"
      },
      {
        id: 2,
        title: "Secure & Reliable",
        description: "Your data is protected with enterprise-grade security",
        background: "bg-[url('/images/security.png')]"
      },
      {
        id: 3,
        title: "Join Our Community",
        description: "Connect with thousands of innovators worldwide",
        background: "bg-[url('/images/ease.png')]"
      },
];

export default function SlideShow({slides = defaultSlides }: {slides?: Slide[]}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Set to previous slide + 1 or go back to first slide
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
    <div
      className={`
        ${slides[currentSlide].background}
        w-full h-full             /* or h-screen if you want viewport height */
        bg-cover bg-center
        flex items-center justify-center backdrop-blur-sm
      `}
    >
      {/* 50 %–opaque black backdrop behind the text */}
      <div
        key={slides[currentSlide].id}
        className="rounded-lg px-6 py-4 text-center text-white max-w-lg bg-primary-dark"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1em'}}   
      >
        <h2 className="text-4xl font-bold mb-2">
          {slides[currentSlide].title}
        </h2>
        <p className="text-lg">
          {slides[currentSlide].description}
        </p>
      </div>
    </div>


    );
}