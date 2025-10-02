import { useEffect, useState } from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Client 1',
      role: 'CEO, Company 1',
      company: 'Company 1',
      content: 'Softmatrices transformed our entire IT infrastructure. Their cloud solutions reduced our operational costs by 40% while improving performance. The team is professional, responsive, and truly understands our business needs.',
      rating: 5,
      avatar: 'C1'
    },
    {
      name: 'Client 2',
      role: 'CTO, Company 2',
      company: 'Company 2',
      content: 'The AI/ML integration they provided has revolutionized our data analytics capabilities. We can now make data-driven decisions in real-time, giving us a significant competitive advantage in the market.',
      rating: 5,
      avatar: 'C2'
    },
    {
      name: 'Client 3',
      role: 'Founder, Company 3',
      company: 'Company 3',
      content: 'From application development to security consulting, Softmatrices has been our trusted technology partner. Their expertise and dedication helped us scale from a startup to a successful enterprise.',
      rating: 5,
      avatar: 'C3'
    },
    {
      name: 'Client 4',
      role: 'IT Director, Company 4',
      company: 'Company 4',
      content: 'The security assessment and implementation they conducted was thorough and comprehensive. We now have enterprise-grade security that protects our data and gives our clients confidence in our services.',
      rating: 5,
      avatar: 'C4'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
        }`}
      />
    ));
  };

  return (
    <section ref={ref} id="testimonials" className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-neutral-700">Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">What Our Clients Say</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Softmatrices.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative">
            <Quote className="w-12 h-12 text-primary-200 absolute top-6 left-6" />
            
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="text-left">
                <div className="font-bold text-neutral-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-neutral-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className={`flex justify-center space-x-2 mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary-500 scale-125'
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 card-hover transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-sm text-neutral-600 mb-4 leading-relaxed">
                "{testimonial.content.substring(0, 120)}..."
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-neutral-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-neutral-600 mb-6">
              Let's discuss how we can help transform your business with our innovative IT solutions.
            </p>
            <button className="btn-primary">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
