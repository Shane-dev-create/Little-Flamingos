import { Link } from 'react-router-dom';
import { BookOpen, Camera, Sun, ShieldCheck, Paintbrush, Utensils } from 'lucide-react';

export default function Facilities() {
  return (
    <div className="bg-sand-50">
      {/* Hero Section */}
      <section className="bg-sun-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-sand-900 mb-6">Our Facilities</h1>
          <p className="text-xl text-sand-800 max-w-3xl mx-auto leading-relaxed">
            A purpose-built environment designed to inspire, protect, and nurture. Every corner of Little Flamingos is crafted with your child in mind.
          </p>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Classrooms */}
            <div className="bg-sand-50 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://picsum.photos/seed/classroom/600/400"
                alt="Bright indoor classroom"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-flamingo-100 p-2 rounded-full"><Paintbrush className="h-6 w-6 text-flamingo-500" /></div>
                  <h3 className="text-2xl font-heading font-bold text-sand-900">Bright Classrooms</h3>
                </div>
                <p className="text-sand-800 leading-relaxed">
                  Spacious, natural-light-filled rooms organized into learning centers. Each room is age-appropriately furnished with safe, high-quality materials.
                </p>
              </div>
            </div>

            {/* Outdoor Play */}
            <div className="bg-sand-50 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://picsum.photos/seed/playground/600/400"
                alt="Outdoor play area"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sun-100 p-2 rounded-full"><Sun className="h-6 w-6 text-sun-500" /></div>
                  <h3 className="text-2xl font-heading font-bold text-sand-900">Outdoor Play Area</h3>
                </div>
                <p className="text-sand-800 leading-relaxed">
                  A secure, shaded outdoor space featuring a sensory garden, sandbox, climbing structures, and plenty of room to run and explore nature safely.
                </p>
              </div>
            </div>

            {/* Reading Corner */}
            <div className="bg-sand-50 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://picsum.photos/seed/library/600/400"
                alt="Cozy reading corner"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sky-100 p-2 rounded-full"><BookOpen className="h-6 w-6 text-sky-500" /></div>
                  <h3 className="text-2xl font-heading font-bold text-sand-900">Reading Nooks</h3>
                </div>
                <p className="text-sand-800 leading-relaxed">
                  Cozy, quiet corners filled with diverse, age-appropriate books to foster a love for reading and provide a calm space for downtime.
                </p>
              </div>
            </div>

            {/* Nap Area */}
            <div className="bg-sand-50 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://picsum.photos/seed/naptime/600/400"
                alt="Peaceful nap area"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-coral-100 p-2 rounded-full"><Camera className="h-6 w-6 text-coral-500" /></div>
                  <h3 className="text-2xl font-heading font-bold text-sand-900">Peaceful Nap Rooms</h3>
                </div>
                <p className="text-sand-800 leading-relaxed">
                  Dedicated, quiet sleeping areas with individual cots or cribs, soft lighting, and soothing sounds to ensure restful sleep.
                </p>
              </div>
            </div>

            {/* Kitchen/Dining */}
            <div className="bg-sand-50 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://picsum.photos/seed/kitchen/600/400"
                alt="Clean dining area"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-flamingo-100 p-2 rounded-full"><Utensils className="h-6 w-6 text-flamingo-500" /></div>
                  <h3 className="text-2xl font-heading font-bold text-sand-900">Dining Area</h3>
                </div>
                <p className="text-sand-800 leading-relaxed">
                  A clean, welcoming space where children enjoy nutritious, chef-prepared meals family-style, encouraging healthy eating habits and social skills.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="bg-sand-50 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://picsum.photos/seed/security/600/400"
                alt="Secure entrance"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sky-100 p-2 rounded-full"><ShieldCheck className="h-6 w-6 text-sky-500" /></div>
                  <h3 className="text-2xl font-heading font-bold text-sand-900">Advanced Security</h3>
                </div>
                <p className="text-sand-800 leading-relaxed">
                  Secure biometric entry systems, comprehensive CCTV coverage, and strict visitor protocols ensure your child is always protected.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-24 bg-flamingo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-sand-900 mb-6">Come See For Yourself</h2>
          <p className="text-lg text-sand-800 mb-10">
            Pictures only tell half the story. We'd love to show you around our beautiful facility and answer any questions you might have.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-flamingo-500 hover:bg-flamingo-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
          >
            Schedule a Personal Tour
          </Link>
        </div>
      </section>
    </div>
  );
}
