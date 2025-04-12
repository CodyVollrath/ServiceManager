import {useState, useEffect} from 'react';

type Slide = {
    id: number,
    title: string,
    description: string,
    bgColor: string
};

const  defaultSlides: Slide[] = [
    {
        id: 1,
        title: "Welcome to ServiceBucket",
        description: "Let us handle your project dependencies. You focus on the business needs!",
        bgColor: "bg-teal-500",
      },
      {
        id: 2,
        title: "Secure & Reliable",
        description: "Your data is protected with enterprise-grade security",
        bgColor: "bg-teal-600",
      },
      {
        id: 3,
        title: "Join Our Community",
        description: "Connect with thousands of innovators worldwide",
        bgColor: "bg-teal-700",
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
        <div className="relative h-full w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center p-10 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } ${slide.bgColor}`}
          >
            <div className="max-w-md text-white text-center">
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    );
}