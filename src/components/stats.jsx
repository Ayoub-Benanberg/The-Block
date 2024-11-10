import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const stats = [
    { id: 1, name: 'Projects Completed', value: 123, iconSrc: '/icons/write.png' },
    { id: 2, name: 'Happy Clients', value: 84, iconSrc: '/icons/hand.png' },
    { id: 3, name: 'Awards Win', value: 37, iconSrc: '/icons/award.png' },
    { id: 4, name: 'Years in Business', value: 30, iconSrc: '/icons/plan.png' },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ target }) => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
      if (!isVisible) return; // Only start animation when the section is visible

      let start = 0;
      const duration = 1000; // Animation duration in milliseconds
      const increment = target / (duration / 16); // 16 ms for each frame

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(counter);
          setNumber(target);
        } else {
          setNumber(Math.ceil(start));
        }
      }, 16); // Run every 16 milliseconds

      return () => clearInterval(counter);
    }, [target]);

    return <span>{number}</span>;
  };

  return (
    <div ref={sectionRef} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0">
        {/* Statistics Section */}
        <div className="flex flex-wrap gap-8 lg:max-w-3xl md:order-1 order-2">
          {stats.map((stat) => (
            <div key={stat.id} className="flex gap-x-4 p-4 bg-gray-50 rounded-lg shadow-lg items-start w-full sm:w-auto">
              <img src={stat.iconSrc} alt={stat.name} className="w-12 h-12" />
              <div>
                <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  <AnimatedNumber target={stat.value} />
                </dd>
                <dt className="mt-1 text-base text-gray-600">{stat.name}</dt>
              </div>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className='md:order-2 order-1'>
          <h2 className="text-4xl font-bold text-blue-800">30 Years Experience</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-md">
            Our company has been the leading provider of construction services to clients throughout the USA since 1988.
          </p>
          <button className="my-6 px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
