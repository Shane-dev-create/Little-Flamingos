import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Star, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-sand-50">
      {/* Hero Section */}
      <section className="relative bg-flamingo-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/nursery/1920/1080?blur=4')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="py-20 md:py-32 lg:py-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-flamingo-600 font-bold text-sm uppercase tracking-wide">
                <Star className="h-4 w-4 fill-current" />
                The #1 Daycare in town!
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-sand-900 leading-tight text-balance">
                Where Little Minds Grow <span className="text-flamingo-500">Big Dreams</span>
              </h1>
              <p className="text-lg md:text-xl text-sand-800 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A warm, safe, and playful environment where your child can learn, explore, and thrive. We provide exceptional early childhood education with a whole lot of love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link
                  to="/contact"
                  className="bg-flamingo-500 hover:bg-flamingo-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Book a Tour <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/programs"
                  className="bg-white hover:bg-sand-100 text-sand-900 px-8 py-4 rounded-full font-bold text-lg transition-colors border-2 border-transparent hover:border-sand-200 flex items-center justify-center"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-coral-300 rounded-[3rem] rotate-3 scale-105 opacity-50"></div>
              <img
                src="https://picsum.photos/seed/daycarekids/800/600"
                alt="Happy children playing"
                className="relative rounded-[3rem] shadow-2xl object-cover w-full h-[600px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4">
                <div className="bg-sun-100 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-sun-500 fill-current" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xl text-sand-900">100%</p>
                  <p className="text-sm font-semibold text-sand-800">Happy Parents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-sand-900 mb-6">Why Choose Little Flamingos?</h2>
            <p className="text-lg text-sand-800">
              We believe in nurturing the whole child through play-based learning, compassionate care, and a safe environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-sky-50 rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-sky-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Shield className="h-10 w-10 text-sky-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-sand-900 mb-4">Safe & Secure</h3>
              <p className="text-sand-800 leading-relaxed">
                State-of-the-art security, strict pickup policies, and CPR-certified staff ensure your child's safety is our top priority.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-coral-50 rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-coral-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Heart className="h-10 w-10 text-coral-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-sand-900 mb-4">Nurturing Care</h3>
              <p className="text-sand-800 leading-relaxed">
                Our passionate educators provide individualized attention and emotional support to help every child flourish.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-sun-50 rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-sun-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Users className="h-10 w-10 text-sun-500" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-sand-900 mb-4">Play-Based Learning</h3>
              <p className="text-sand-800 leading-relaxed">
                A curriculum designed to spark curiosity, creativity, and a lifelong love of learning through guided play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-flamingo-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/pattern/1920/1080?blur=8')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 text-balance">
            Ready to join the Little Flamingos family?
          </h2>
          <p className="text-xl text-flamingo-50 mb-10 max-w-2xl mx-auto">
            Schedule a visit today to see our beautiful facilities and meet our wonderful team of educators.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-flamingo-600 px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
