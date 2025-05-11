
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="feature-icon">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 mb-3 sm:mb-4 text-sm">{description}</p>
      <Link to="/learn-more" className="learn-more">
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Easier Work Organization",
      description: "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Fast Connection",
      description: "Completely pursue scalable customer cross-media through potentialities. Holistically quickly installed portals."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H15M9 3V9M3 9V15M3 9H9M3 15V19C3 20.1046 3.89543 21 5 21H9M3 15H9M9 21H15M9 21V15M15 21H19C20.1046 21 21 20.1046 21 19V15M15 21V15M21 15V9M21 15H15M21 9V5C21 3.89543 20.1046 3 19 3H15M21 9H15M15 3V9M15 9H9M15 15H9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Streamlined Processes",
      description: "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible."
    }
  ];

  const bottomFeatures = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.68387 4.09442C6.37182 4.74296 4.74296 6.37182 4.09442 8.68387M4.09442 8.68387C3.59655 10.3732 3.59655 12.1268 4.09442 13.8161M4.09442 8.68387L2 9.5M4.09442 13.8161C4.74296 16.1282 6.37182 17.757 8.68387 18.4056M4.09442 13.8161L2 14.5M8.68387 18.4056C10.3732 18.9034 12.1268 18.9034 13.8161 18.4056M8.68387 18.4056L7.5 22M13.8161 18.4056C16.1282 17.757 17.757 16.1282 18.4056 13.8161M13.8161 18.4056L16.5 22M18.4056 13.8161C18.9035 12.1268 18.9035 10.3732 18.4056 8.68387M18.4056 13.8161L22 14.5M18.4056 8.68387C17.757 6.37182 16.1282 4.74296 13.8161 4.09442M18.4056 8.68387L22 9.5M13.8161 4.09442C12.1268 3.59655 10.3732 3.59655 8.68387 4.09442M13.8161 4.09442L16.5 2M8.68387 4.09442L7.5 2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Easier Integrations",
      description: "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Marketing Analytics",
      description: "Phosphluorescently engage worldwide methodologies with web-enabled. Interactively coordinate."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8L3 12L7 16M17 8L21 12L17 16M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Workflow Builder",
      description: "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This is objectively scalable metrics whereas."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <h2 className="section-title">Messaging for all</h2>
      <p className="section-subtitle">
        User generated content in real-time will have multiple touchpoints for offshoring.
      </p>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {bottomFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
