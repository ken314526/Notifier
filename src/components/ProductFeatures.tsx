
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="mb-6 md:mb-10">
      <div className="feature-icon">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <Link to="/learn-more" className="learn-more">
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

const ProductFeatures = () => {
  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12H16M12 16V8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Explore ideas together",
      description: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99992 20.1046 9.99992 19V18.469C9.99992 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Bring those ideas to life",
      description: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Ship better outcomes",
      description: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Redefining Product Features</h2>
        <p className="section-subtitle">
          Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mt-8 lg:mt-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0 order-1 lg:order-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="aspect-square rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=600" 
                    alt="Workspace" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=600" 
                    alt="Workspace" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=600" 
                    alt="Workspace" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=600" 
                    alt="Workspace" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
