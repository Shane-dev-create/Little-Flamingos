import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Classrooms', 'Outdoor Play', 'Art & Activities', 'Events'];

  const images = [
    { src: 'https://picsum.photos/seed/kids1/800/600', category: 'Outdoor Play', alt: 'Kids playing outside' },
    { src: 'https://picsum.photos/seed/kids2/800/600', category: 'Classrooms', alt: 'Bright classroom' },
    { src: 'https://picsum.photos/seed/kids3/800/600', category: 'Art & Activities', alt: 'Finger painting' },
    { src: 'https://picsum.photos/seed/kids4/800/600', category: 'Events', alt: 'Holiday party' },
    { src: 'https://picsum.photos/seed/kids5/800/600', category: 'Outdoor Play', alt: 'Sandbox fun' },
    { src: 'https://picsum.photos/seed/kids6/800/600', category: 'Classrooms', alt: 'Reading corner' },
    { src: 'https://picsum.photos/seed/kids7/800/600', category: 'Art & Activities', alt: 'Building blocks' },
    { src: 'https://picsum.photos/seed/kids8/800/600', category: 'Events', alt: 'Graduation day' },
    { src: 'https://picsum.photos/seed/kids9/800/600', category: 'Outdoor Play', alt: 'Running on grass' },
    { src: 'https://picsum.photos/seed/kids10/800/600', category: 'Classrooms', alt: 'Circle time' },
    { src: 'https://picsum.photos/seed/kids11/800/600', category: 'Art & Activities', alt: 'Music class' },
    { src: 'https://picsum.photos/seed/kids12/800/600', category: 'Events', alt: 'Parent-teacher meeting' },
  ];

  const filteredImages = activeTab === 'All' ? images : images.filter(img => img.category === activeTab);

  return (
    <div className="bg-sand-50">
      {/* Hero Section */}
      <section className="bg-sky-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-sand-900 mb-6">Gallery</h1>
          <p className="text-xl text-sand-800 max-w-3xl mx-auto leading-relaxed">
            A glimpse into the daily joy, creativity, and learning at Little Flamingos Daycare.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-colors ${
                  activeTab === tab
                    ? 'bg-flamingo-500 text-white shadow-md'
                    : 'bg-sand-100 text-sand-800 hover:bg-sand-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div key={index} className="group relative rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-heading font-bold text-lg">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
