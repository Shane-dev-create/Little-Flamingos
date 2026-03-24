import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Web3Forms access key (Replace with your own key or use environment variable)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "d5dcc748-8e6a-42b0-aeab-a65edc805c97";
    formData.append("access_key", accessKey);
    formData.append("subject", "New Daycare Visit Request");
    formData.append("from_name", "Little Flamingos Website");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });
      const data = await response.json();
      if (response.status === 200 || data.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error("Form submission failed:", data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-sand-50">
      {/* Hero Section */}
      <section className="bg-sky-100 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-sand-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-sand-800 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have a question about our programs, pricing, or want to schedule a visit, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-heading font-bold text-sand-900 mb-6">Contact Information</h2>
                <p className="text-lg text-sand-800 leading-relaxed mb-8">
                  Reach out to us directly or fill out the form, and we'll get back to you as soon as possible.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-flamingo-100 p-3 rounded-full shrink-0">
                      <MapPin className="h-6 w-6 text-flamingo-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-sand-900 mb-1">Our Location</h3>
                      <p className="text-sand-800">169 Altena Rd, Die Bos<br />Cape Town, 7140<br />South Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-sky-100 p-3 rounded-full shrink-0">
                      <Phone className="h-6 w-6 text-sky-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-sand-900 mb-1">Phone Number</h3>
                      <a 
                        href="https://wa.me/27732772119" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sand-800 hover:text-flamingo-500 transition-colors inline-block"
                      >
                        +27 73 277 2119
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-coral-100 p-3 rounded-full shrink-0">
                      <Mail className="h-6 w-6 text-coral-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-sand-900 mb-1">Email Address</h3>
                      <p className="text-sand-800">neri.donato@forliion.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-sun-100 p-3 rounded-full shrink-0">
                      <Clock className="h-6 w-6 text-sun-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-sand-900 mb-1">Operating Hours</h3>
                      <p className="text-sand-800">Monday - Friday: 07:00 AM - 18:00 PM<br />Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <a 
                href="https://www.google.com/maps/dir/-34.1016451,18.8622143/Little+Flamingos+Daycare,+169+Altena+Rd,+Die+Bos,+Cape+Town,+7140/@-34.1019661,18.8305166,5168m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1dcdcbe737169ca1:0xc5a02cf34705d4da!2m2!1d18.8465602!2d-34.1089965?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-100 rounded-[2rem] h-64 flex items-center justify-center overflow-hidden relative group transition-transform hover:scale-[1.02] shadow-md border-2 border-transparent hover:border-flamingo-300"
              >
                <div className="absolute inset-0 bg-white/50 group-hover:bg-white/10 transition-colors z-0"></div>
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://www.google.com/maps/dir/-34.1016451,18.8622143/Little+Flamingos+Daycare,+169+Altena+Rd,+Die+Bos,+Cape+Town,+7140/@-34.1019661,18.8305166,5168m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1dcdcbe737169ca1:0xc5a02cf34705d4da!2m2!1d18.8465602!2d-34.1089965?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D')}`}
                  alt="QR Code to Google Maps" 
                  className="w-48 h-48 object-contain relative z-10 drop-shadow-sm"
                />
                <div className="absolute bottom-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sand-900 shadow-sm text-sm z-10 group-hover:bg-flamingo-500 group-hover:text-white transition-colors">
                  Click or Scan for Directions
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-sand-50 rounded-[3rem] p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-heading font-bold text-sand-900 mb-8">Schedule a Visit</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-bold text-sand-900">Parent's First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-flamingo-500 focus:ring-2 focus:ring-flamingo-200 outline-none transition-all bg-white" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-bold text-sand-900">Parent's Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-flamingo-500 focus:ring-2 focus:ring-flamingo-200 outline-none transition-all bg-white" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-sand-900">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-flamingo-500 focus:ring-2 focus:ring-flamingo-200 outline-none transition-all bg-white" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-sand-900">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-flamingo-500 focus:ring-2 focus:ring-flamingo-200 outline-none transition-all bg-white" placeholder="+27 82 123 4567" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="childAge" className="block text-sm font-bold text-sand-900">Child's Age</label>
                    <select id="childAge" name="childAge" required className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-flamingo-500 focus:ring-2 focus:ring-flamingo-200 outline-none transition-all bg-white">
                      <option value="">Select age...</option>
                      <option value="infant">Infant (3-12 months)</option>
                      <option value="toddler">Toddler (1-3 years)</option>
                      <option value="preschool">Preschool (3-5 years)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="program" className="block text-sm font-bold text-sand-900">Program Interest</label>
                    <select id="program" name="program" required className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-flamingo-500 focus:ring-2 focus:ring-flamingo-200 outline-none transition-all bg-white">
                      <option value="">Select program...</option>
                      <option value="full">Full Day</option>
                      <option value="half">Half Day</option>
                      <option value="afterschool">After School Care</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-sand-900">Message or Questions</label>
                  <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-sand-200 focus:border-flamingo-500 focus:ring-2 focus:ring-flamingo-200 outline-none transition-all bg-white resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-flamingo-500 hover:bg-flamingo-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send className="h-5 w-5" /></>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl flex items-start gap-3 border border-green-200">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">Thank you! Your request has been sent successfully. We will be in touch soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-3 border border-red-200">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">Oops! Something went wrong. Please make sure you have added your Web3Forms access key, or try contacting us directly.</p>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
