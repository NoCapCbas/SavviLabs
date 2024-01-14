import React, { useState } from 'react';

const Blog = () => {
  const articles = [
      {
        title: "Exploring the Future of Tech",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/blog/future-of-tech"
      },
      {
        title: "Innovations in SaaS",
        summary: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "/blog/innovations-in-saas"
      },
      {
        title: "Understanding Cloud Computing",
        summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        link: "/blog/cloud-computing"
      }
    ];

  return (
    <section className="py-12 md:py-24 text-white mx-auto w-full px-8 max-w-5xl">
        {/* Blog Heading */}
        <div className="flex justify-between align-middle">
          <h3 className="font-display font-bold text-typo m-0 text-4xl">Savvi Blog</h3> 
          <a href="/blog" className="group flex items-center font-bold cursor-pointer transition ease-in-out !no-underline text-typo hover:text-typo-secondary text-xl focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded">
            See more articles
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:animate-bounceRight ml-2">
              <path d="M11.3846 16.8L18.7692 12L11.3846 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M5.23077 12H17.5385" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>
        </div>
        {/* Blog Articles */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-primary-300 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">{article.title}</h4>
              <p>{article.summary}</p>
              <a href={article.link} className="text-white mt-4 inline-block hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Blog;

