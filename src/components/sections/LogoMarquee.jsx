import React from 'react';

const logos = [
  "DaouTech", "Samsung C&T", "Toss", "Naver Cloud", "Kakao Enterprise", "Line", "Woowa Bros", "Viva Republica", "Socar", "Kurly"
];

const LogoMarquee = () => {
  return (
    <section className="py-12 bg-surface-50 border-y border-surface-200 overflow-hidden relative flex items-center">
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-surface-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-surface-50 to-transparent z-10"></div>
      
      <div className="flex w-[200%] animate-marquee whitespace-nowrap opacity-60">
        <div className="flex justify-around min-w-full">
          {logos.map((logo, index) => (
            <div key={index} className="text-2xl font-black text-surface-400 uppercase tracking-tighter mx-12">
              {logo}
            </div>
          ))}
        </div>
        <div className="flex justify-around min-w-full">
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="text-2xl font-black text-surface-400 uppercase tracking-tighter mx-12">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
