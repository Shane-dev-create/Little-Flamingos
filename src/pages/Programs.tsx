import { Link } from 'react-router-dom';
import { BookOpen, Palette, Music, Activity, Puzzle, Sparkles } from 'lucide-react';

export default function Programs() {
  return (
    <div className="bg-sand-50">
      {/* Hero Section */}
      <section className="bg-coral-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-sand-900 mb-6">Our Programs</h1>
          <p className="text-xl text-sand-800 max-w-3xl mx-auto leading-relaxed">
            Tailored learning experiences for every stage of your child's early development. We blend play, creativity, and structured activities.
          </p>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Infants */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-full text-sky-600 font-bold text-sm uppercase tracking-wide">
                <Sparkles className="h-4 w-4 fill-current" />
                3 - 12 Months
              </div>
              <h2 className="text-4xl font-heading font-bold text-sand-900">Infant Program</h2>
              <p className="text-lg text-sand-800 leading-relaxed">
                Our infant room is a peaceful, nurturing environment designed to make your baby feel safe and loved. We focus on sensory exploration, motor skill development, and building secure attachments.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-sky-100 p-2 rounded-full"><Activity className="h-5 w-5 text-sky-600" /></div>
                  <span className="text-sand-800 font-semibold">Tummy time & physical development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-sky-100 p-2 rounded-full"><Music className="h-5 w-5 text-sky-600" /></div>
                  <span className="text-sand-800 font-semibold">Lullabies, music, and gentle sounds</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-sky-100 p-2 rounded-full"><Puzzle className="h-5 w-5 text-sky-600" /></div>
                  <span className="text-sand-800 font-semibold">Sensory play with safe, soft materials</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://picsum.photos/seed/infantcare/800/600"
                alt="Infant care"
                className="rounded-[3rem] shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Toddlers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://picsum.photos/seed/toddlerplay/800/600"
                alt="Toddlers playing"
                className="rounded-[3rem] shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-sun-100 px-4 py-2 rounded-full text-sun-600 font-bold text-sm uppercase tracking-wide">
                <Sparkles className="h-4 w-4 fill-current" />
                1 - 3 Years
              </div>
              <h2 className="text-4xl font-heading font-bold text-sand-900">Toddler Program</h2>
              <p className="text-lg text-sand-800 leading-relaxed">
                Toddlers are natural explorers! Our program channels their boundless energy into meaningful play, focusing on language acquisition, social skills, and early independence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-sun-100 p-2 rounded-full"><BookOpen className="h-5 w-5 text-sun-600" /></div>
                  <span className="text-sand-800 font-semibold">Storytime and vocabulary building</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-sun-100 p-2 rounded-full"><Palette className="h-5 w-5 text-sun-600" /></div>
                  <span className="text-sand-800 font-semibold">Messy art and creative expression</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-sun-100 p-2 rounded-full"><Activity className="h-5 w-5 text-sun-600" /></div>
                  <span className="text-sand-800 font-semibold">Outdoor play and gross motor skills</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Preschoolers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-2 bg-flamingo-100 px-4 py-2 rounded-full text-flamingo-600 font-bold text-sm uppercase tracking-wide">
                <Sparkles className="h-4 w-4 fill-current" />
                3 - 5 Years
              </div>
              <h2 className="text-4xl font-heading font-bold text-sand-900">Preschool Program</h2>
              <p className="text-lg text-sand-800 leading-relaxed">
                Preparing for big school while still having fun! Our preschool curriculum introduces early literacy, math concepts, and science through hands-on, project-based learning.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-flamingo-100 p-2 rounded-full"><BookOpen className="h-5 w-5 text-flamingo-600" /></div>
                  <span className="text-sand-800 font-semibold">Pre-reading and writing skills</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-flamingo-100 p-2 rounded-full"><Puzzle className="h-5 w-5 text-flamingo-600" /></div>
                  <span className="text-sand-800 font-semibold">Early math and problem-solving</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-flamingo-100 p-2 rounded-full"><Activity className="h-5 w-5 text-flamingo-600" /></div>
                  <span className="text-sand-800 font-semibold">Cooperative play and conflict resolution</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://picsum.photos/seed/preschoolers/800/600"
                alt="Preschool learning"
                className="rounded-[3rem] shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Daily Schedule Example */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-sand-900 mb-6">A Day in the Life</h2>
            <p className="text-lg text-sand-800">
              While every day brings new adventures, we maintain a consistent routine to help children feel secure and know what to expect.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">
            <div className="divide-y divide-sand-100">
              {[
                { time: '07:00 - 08:30', activity: 'Arrival & Free Play', desc: 'Welcoming children, settling in, and self-guided activities.' },
                { time: '08:30 - 09:00', activity: 'Morning Circle Time', desc: 'Greetings, songs, weather, and discussing the day\'s theme.' },
                { time: '09:00 - 10:00', activity: 'Learning Centers', desc: 'Small group activities focusing on art, math, or literacy.' },
                { time: '10:00 - 10:30', activity: 'Healthy Snack', desc: 'Nutritious morning snack and socializing.' },
                { time: '10:30 - 11:30', activity: 'Outdoor Exploration', desc: 'Gross motor play, nature walks, and sandbox fun.' },
                { time: '11:30 - 12:30', activity: 'Lunch Time', desc: 'Balanced, family-style meals.' },
                { time: '12:30 - 14:30', activity: 'Nap / Quiet Time', desc: 'Rest for younger children, quiet reading for older ones.' },
                { time: '14:30 - 15:00', activity: 'Afternoon Snack', desc: 'Re-energizing for the rest of the day.' },
                { time: '15:00 - 16:30', activity: 'Creative Arts & Music', desc: 'Painting, dancing, and creative expression.' },
                { time: '16:30 - 18:00', activity: 'Free Play & Departure', desc: 'Winding down and sharing the day\'s stories with parents.' },
              ].map((item, index) => (
                <div key={index} className="p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 hover:bg-sand-50 transition-colors">
                  <div className="sm:w-48 shrink-0">
                    <span className="inline-block bg-sand-100 text-sand-900 font-bold px-4 py-2 rounded-full text-sm">
                      {item.time}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-sand-900 mb-2">{item.activity}</h3>
                    <p className="text-sand-800">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-block bg-flamingo-500 hover:bg-flamingo-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
            >
              Enroll Your Child Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
