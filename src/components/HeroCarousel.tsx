import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://i.pinimg.com/1200x/0c/9c/89/0c9c89bf8503c6d2ac55b85afa216dc2.jpg',
    title: 'Premium Whole Chicken',
    subtitle: 'Fresh, cleaned & ready to cook'
  },
  {
    image: '/carousel.jpg',
    title: 'Farm-Fresh Excellence',
    subtitle: 'Specially selected for your family'
  },

  {
    image: 'https://static.vecteezy.com/system/resources/previews/030/637/817/large_2x/eggs-image-hd-free-photo.jpg',
    title: 'Farm Fresh Eggs',
    subtitle: 'Delivered fresh daily'
  },
     {
    image: 'https://www.tastingtable.com/img/gallery/the-best-cuts-of-chicken-ranked/l-intro-1659739353.jpg',
    title: 'Fresh Chicken Cuts',
    subtitle: 'Perfectly portioned for your needs'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
<div className="relative h-[400px] sm:h-[580px] bg-gray-900 overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 italic">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
