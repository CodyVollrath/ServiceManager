import {useState, useEffect} from 'react';

type Slide = {
    id: number,
    title: string,
    description: string
};

const  defaultSlides: Slide[] = [
    {
        id: 1,
        title: "Welcome to ServiceBucket",
        description: "Let us handle your project dependencies. You focus on the business needs!"
      },
      {
        id: 2,
        title: "Secure & Reliable",
        description: "Your data is protected with enterprise-grade security",
      },
      {
        id: 3,
        title: "Join Our Community",
        description: "Connect with thousands of innovators worldwide"
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
      <div>
        <div key={slides[currentSlide].id} className="">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
        </div>
      </div>
    );
}