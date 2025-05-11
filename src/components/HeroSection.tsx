
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-brand-blue text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Your Supercharged Design Workflow.
          </h1>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-200 max-w-lg">
            We&apos;ve been told it is not possible to overachieve our customers&apos; expectations. We have not reinvented the wheel, we decided to build upon it.
          </p>
          <Button className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-2 rounded-md font-medium w-full sm:w-auto">
            Send Notification
          </Button>

          <div className="mt-8 md:mt-12">
            <p className="font-semibold text-sm mb-4">Who supports us</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
              <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <svg width="60" height="20" viewBox="0 0 80 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0C8.95 0 0 8.95 0 20h20V0z"/>
                  <path d="M20 20c0 11.05 8.95 20 20 20V20H20z"/>
                  <path d="M60 20c0-11.05-8.95-20-20-20v20h20z"/>
                </svg>
              </div>
              <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <svg width="60" height="20" viewBox="0 0 80 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z"/>
                </svg>
              </div>
              <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <svg width="60" height="20" viewBox="0 0 80 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0l40 12-40 12L0 12 40 0z"/>
                </svg>
              </div>
              <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <svg width="60" height="20" viewBox="0 0 80 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="24" rx="12"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative z-10 animate-fade-in">
            {/* Abstract shapes */}
            <div className="absolute -top-20 right-0 w-24 md:w-32 h-24 md:h-32 bg-white rounded-full opacity-20"></div>
            <div className="absolute top-20 right-10 md:right-20 w-40 md:w-64 h-40 md:h-64 bg-white rounded-full opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-white rounded-full opacity-10"></div>
            
            {/* Profile image placeholder */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto bg-brand-lightBlue rounded-full overflow-hidden border-4 border-white/30">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                <span>Image</span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-10 right-10 w-16 h-16 md:w-24 md:h-24 border-4 border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-0 w-32 md:w-40 h-12 md:h-16 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
