
const TestimonialSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 lg:p-12">
          <div className="flex justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-blue">
              <path d="M15 3H9C7.89543 3 7 3.89543 7 5V19C7 20.1046 7.89543 21 9 21H15C16.1046 21 17 20.1046 17 19V5C17 3.89543 16.1046 3 15 3Z" fill="currentColor"/>
              <path d="M8 17H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 7H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <blockquote className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-6">
              Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can&apos;t say enough about LookScout. Great job, I will definitely be ordering again!
            </p>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mb-3 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" 
                  alt="Lisa Smith" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold">Lisa Smith</p>
                <p className="text-sm text-gray-500">CEO Company</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
