import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Delia Van Wyk',
      childAge: 'Parent',
      quote: 'Thank you for providing a loving atmosphere for my little one! Little Flamingos teachers, your hard work is truly appreciated. The fact that my little one just wants to attend day care / "maatjies" - with the biggest smile...',
      image: 'https://picsum.photos/seed/parent1/200/200',
    },
    {
      name: 'Jenny Coughlan',
      childAge: 'Parent',
      quote: 'You won\'t find a more amazing and child-friendly daycare. The teachers are patient, kind, and have a genuine passion for each child. I would definitely recommend them.',
      image: 'https://picsum.photos/seed/parent2/200/200',
    },
    {
      name: 'Lawrence Myburgh',
      childAge: 'Parent',
      quote: 'Feel honoured to have my son attend such a caring kindergarten. Kids have so much fun and learn so quickly in the friendly and clean environment. Highly recommended.',
      image: 'https://picsum.photos/seed/parent3/200/200',
    },
    {
      name: 'Jessica W.',
      childAge: 'Mother of 2-year-old',
      quote: 'We love the focus on outdoor play and creativity. The facilities are always clean, bright, and welcoming. It truly feels like a community rather than just a daycare.',
      image: 'https://picsum.photos/seed/parent4/200/200',
    },
    {
      name: 'David K.',
      childAge: 'Father of 8-month-old',
      quote: 'The infant room is so peaceful and the caregivers are angels. They follow our home schedule perfectly and have been so supportive of our parenting choices.',
      image: 'https://picsum.photos/seed/parent5/200/200',
    },
  ];

  return (
    <div className="bg-sand-50">
      {/* Hero Section */}
      <section className="bg-coral-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-sand-900 mb-6">Parent Stories</h1>
          <p className="text-xl text-sand-800 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear what our wonderful community of parents has to say about their experience at Little Flamingos.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-sand-50 rounded-[2rem] p-8 shadow-lg relative hover:-translate-y-2 transition-transform duration-300">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-flamingo-200 opacity-50" />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-flamingo-300"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-sand-900">{testimonial.name}</h3>
                    <p className="text-sm text-sand-800 font-semibold">{testimonial.childAge}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sun-500 text-sun-500" />
                  ))}
                </div>
                <p className="text-sand-800 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
