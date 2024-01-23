import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your logic to submit the email to your backend here.
    console.log("Email submitted:", email);
    setEmail(''); // Reset the input field after submission.
  };

  return (
    <section className="py-12 md:py-24 text-white">
      <div className="mx-auto w-full px-8 max-w-5xl"> 
        {/* Newsletter Form */}
        <div className="py-4 md:py-8" id="get-updates">
          <h3 className="font-display font-bold text-typo m-0 text-4xl">Get Updates</h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-6 mt-7">
              <p className="text-base font-body m-0">
                Join our newsletter for updates of our newest released apps, features, and blog posts.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:grow sm:items-center sm:mt-6 relative">
              <div className="grow">
                <div className="relative bg-white overflow-hidden py-1 border-1 border-typo-tertiary hover:border-typo focus-within:ring-2 focus-within:ring-primary focus-within:border-primary shadow-sm rounded-full px-4">
                  <input 
                    id="email" 
                    type="email" 
                    className="peer w-full block text-base text-typo border-0 pt-4 pb-1.5 px-2.5 focus:ring-0 focus:outline-none md:pr-36"
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="border border-transparent rounded-full font-bold text-center text-base px-6 h-11 text-white bg-primary hover:bg-primary-hover active:bg-primary-hover active:scale-[0.98] focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover sm:absolute sm:right-1.5 sm:top-1.5">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

