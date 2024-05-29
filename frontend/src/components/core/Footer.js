import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-gray-400 py-3 md:py-6">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-50">Savvi Labs</span>
          </div>
          <p className="text-sm">
            Savvi Labs specializes in web scraping public data.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-8 text-center">
      <p className="text-sm">© 2024 Savvi Labs. All rights reserved.</p>
      </div>
    </footer>  
  )
};

export default Footer;
