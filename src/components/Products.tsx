import { ArrowRight, Sparkles, Tablet, Laptop, Smartphone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Products = () => {
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const products = [
    {
      icon: Tablet,
      title: 'Product A',
      description: 'This product offers a range of features designed to enhance productivity and streamline workflows for modern businesses.',
      features: ['Workflow Automation', 'Team Collaboration', 'Real-time Analytics', 'Custom Integrations'],
      gradient: 'from-blue-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-teal-50'
    },
    {
      icon: Laptop,
      title: 'Product B',
      description: 'This product focuses on data analysis and visualization, providing insights for informed decision-making and business growth.',
      features: ['Data Visualization', 'Advanced Analytics', 'Predictive Insights', 'Custom Dashboards'],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    {
      icon: Smartphone,
      title: 'Product C',
      description: 'This product is a comprehensive solution for managing customer relationships and improving engagement across all touchpoints.',
      features: ['Customer Management', 'Engagement Tracking', 'Automated Workflows', 'Multi-channel Support'],
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50'
    }
  ];

  return (
    <section ref={ref} id="products" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 glass-card rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-neutral-700">Our Products</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Our Innovative Products</span>
          </h2>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We develop cutting-edge solutions to solve complex business challenges and drive digital transformation.
          </p>
        </div>

        <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`glass-card rounded-2xl overflow-hidden card-hover transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Product Image/Icon Section */}
              <div className={`${product.bgColor} p-8 text-center`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                  <product.icon className="w-10 h-10 text-white" />
                </div>
                <div className="w-24 h-16 bg-white/50 rounded-lg mx-auto"></div>
              </div>
              
              {/* Product Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {product.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="group flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Showcase CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Want to See Our Products in Action?
            </h3>
            <p className="text-neutral-600 mb-6">
              Schedule a personalized demo and discover how our innovative solutions can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">
                Schedule Demo
              </button>
              <button className="btn-secondary">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
