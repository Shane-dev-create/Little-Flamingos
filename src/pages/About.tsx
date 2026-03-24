import { CheckCircle2, Heart, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-sand-50">
      {/* Hero Section */}
      <section className="bg-sky-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-sand-900 mb-6">About Us</h1>
          <p className="text-xl text-sand-800 max-w-3xl mx-auto leading-relaxed">
            Discover the heart behind Little Flamingos Daycare. We are dedicated to providing a safe, nurturing, and joyful environment for your little ones to grow.
          </p>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://picsum.photos/seed/daycaremission/800/600"
                alt="Children learning together"
                className="rounded-[2rem] shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-heading font-bold text-sand-900 mb-4">Our Mission</h2>
                <p className="text-lg text-sand-800 leading-relaxed">
                  To provide a foundation for lifelong learning in a safe, loving, and stimulating environment. We believe every child is unique and deserves the opportunity to discover their potential through play, exploration, and guided learning.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-heading font-bold text-sand-900 mb-4">Our Philosophy</h2>
                <p className="text-lg text-sand-800 leading-relaxed mb-6">
                  Inspired by Montessori and play-based learning principles, we focus on the holistic development of each child—socially, emotionally, physically, and cognitively.
                </p>
                <ul className="space-y-4">
                  {[
                    'Child-led exploration and discovery',
                    'Fostering independence and confidence',
                    'Building strong, positive relationships',
                    'Respecting each child\'s individual pace',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-flamingo-500 shrink-0 mt-0.5" />
                      <span className="text-sand-800 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-sand-900 mb-6">Meet Our Educators</h2>
            <p className="text-lg text-sand-800">
              Our team of passionate, certified professionals is dedicated to your child's growth and happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Sarah Jenkins',
                role: 'Founder & Director',
                image: 'https://picsum.photos/seed/sarah/400/400',
                bio: 'With over 15 years of experience in early childhood education, Sarah founded Little Flamingos to create a space where children truly thrive.',
              },
              {
                name: 'David Chen',
                role: 'Lead Preschool Teacher',
                image: 'https://picsum.photos/seed/david/400/400',
                bio: 'David brings creativity and boundless energy to our preschool program, specializing in early literacy and arts.',
              },
              {
                name: 'Maria Rodriguez',
                role: 'Infant Care Specialist',
                image: 'https://picsum.photos/seed/maria/400/400',
                bio: 'Maria\'s gentle approach and deep understanding of infant development ensure our youngest flamingos feel safe and loved.',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-flamingo-100"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-2xl font-heading font-bold text-sand-900 mb-2">{member.name}</h3>
                <p className="text-flamingo-500 font-semibold mb-4">{member.role}</p>
                <p className="text-sand-800 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand-100 rounded-[3rem] p-12 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-heading font-bold text-sand-900">Safety & Standards</h2>
                <p className="text-lg text-sand-800 leading-relaxed">
                  Your peace of mind is our priority. We maintain the highest standards of safety, hygiene, and professional care.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <Shield className="h-8 w-8 text-sky-500" />
                    <span className="font-semibold text-sand-900">Secure Entry</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <Heart className="h-8 w-8 text-coral-500" />
                    <span className="font-semibold text-sand-900">CPR Certified</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <Users className="h-8 w-8 text-sun-500" />
                    <span className="font-semibold text-sand-900">Low Ratios</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <CheckCircle2 className="h-8 w-8 text-flamingo-500" />
                    <span className="font-semibold text-sand-900">Fully Licensed</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[2rem] p-8 shadow-xl">
                <h3 className="text-2xl font-heading font-bold text-sand-900 mb-6">Operating Details</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-sand-100 pb-4">
                    <span className="text-sand-800 font-semibold">Ages Served</span>
                    <span className="text-sand-900 font-bold">3 Months - 5 Years</span>
                  </li>
                  <li className="flex justify-between border-b border-sand-100 pb-4">
                    <span className="text-sand-800 font-semibold">Monday - Friday</span>
                    <span className="text-sand-900 font-bold">07:00 AM - 18:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-sand-100 pb-4">
                    <span className="text-sand-800 font-semibold">Saturday - Sunday</span>
                    <span className="text-sand-900 font-bold">Closed</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span className="text-sand-800 font-semibold">Location</span>
                    <span className="text-sand-900 font-bold text-right">169 Altena Rd, Die Bos<br />Cape Town, 7140</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
