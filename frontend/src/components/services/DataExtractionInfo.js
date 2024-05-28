import React from 'react';

export default function DataExtractionInfo() {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
              Key Capabilities
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Harness the Power of Public Web Data</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the unmatched advantages of our web scraping services, designed to elevate your business strategy
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            <Feature 
              title="Effortless Data Collection" 
              description="Automate the extraction of valuable data from any website without manual effort." 
              Icon={BoltIcon}
            />
            <Feature 
              title="Fast & Reliable" 
              description="Stay ahead of the competition with fast updates and accurate data." 
              Icon={GaugeIcon}
            />
          </div>
          <div className="grid gap-6">
            <Feature 
              title="Custom Solutions" 
              description="Our services are tailored to meet your specific business needs, ensuring maximum efficiency." 
              Icon={MoveHorizontalIcon}
            />
            <Feature 
              title="Advanced Web Scraping" 
              description="Leverage our expert experience to go beyond other web scraping tools." 
              Icon={ShieldCheckIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, description, Icon }) {
  return (
    <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm transition-colors hover:bg-gray-50">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 ">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="grid gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

