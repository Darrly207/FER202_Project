import React from "react";
import img1 from "../assets/image.png";
import Footer from "../components/Footer";
const JobTurnityClone = () => {
  const recommendedCompanies = [
    {
      logo: img1,
      name: "Nomad",
      location: "Paris, France",
      jobCount: 3,
      tags: ["Tech", "Remote"],
    },
    {
      logo: img1,
      name: "Discord",
      location: "San Francisco, USA",
      jobCount: 5,
      tags: ["Tech", "Community"],
    },
    {
      logo: img1,
      name: "Miros",
      location: "Berlin, Germany",
      jobCount: 4,
      tags: ["Design", "Remote"],
    },
    {
      logo: img1,
      name: "Unity",
      location: "Stockholm, Sweden",
      jobCount: 6,
      tags: ["Tech", "Learning"],
    },
    {
      logo: img1,
      name: "Wallflow",
      location: "New York, USA",
      jobCount: 2,
      tags: ["Design", "Web"],
    },
    {
      logo: img1,
      name: "Foundation",
      location: "London, UK",
      jobCount: 7,
      tags: ["Blockchain", "Tech"],
    },
  ];

  const otherCompanies = [
    { logo: img1, name: "Pentagram", location: "New York, USA", jobCount: 3 },
    { logo: img1, name: "Wolff Olins", location: "London, UK", jobCount: 4 },
    { logo: img1, name: "Clay", location: "San Francisco, USA", jobCount: 5 },
    {
      logo: img1,
      name: "MediaMonks",
      location: "Amsterdam, Netherlands",
      jobCount: 6,
    },
    { logo: img1, name: "Packer", location: "Tokyo, Japan", jobCount: 2 },
    {
      logo: img1,
      name: "Square",
      location: "Melbourne, Australia",
      jobCount: 3,
    },
    { logo: img1, name: "Divy", location: "Toronto, Canada", jobCount: 4 },
    { logo: img1, name: "Webflow", location: "Austin, USA", jobCount: 5 },
  ];

  return (
    <div className="bg-white min-h-screen p-4 sm:p-8">
      {/* Search Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Find your <span className="text-yellow-400">dream companies</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Find the most creative companies you dream to work for
        </p>
        <div className="flex flex-col sm:flex-row max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Company name or keywords"
            className="flex-grow p-4 border-b sm:border-b-0 sm:border-r focus:outline-none"
          />
          <button className="bg-green-600 text-yellow-400 px-6 py-3 sm:py-4 hover:bg-green-700 transition-colors duration-300">
            Search
          </button>
        </div>
      </div>

      {/* Recommended Companies */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6">Recommended Companies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedCompanies.map((company) => (
            <div
              key={company.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg text-center mb-2">
                {company.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-2">
                {company.location}
              </p>
              <p className="text-sm text-center text-green-600 font-semibold mb-4">
                {company.jobCount} Jobs Available
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {company.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Start Posting Jobs */}
      <div className="bg-blue-600 text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center mb-12 rounded-lg">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Start posting jobs today
          </h2>
          <p className="mb-6">Get started with our free job posting tools</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Sign Up For Free
          </button>
        </div>
        <div className="bg-white/20 p-6 rounded-lg mt-4 sm:mt-0">
          <div className="text-2xl sm:text-4xl font-bold mb-2">21,457</div>
          <div>Applicants Statistic</div>
          <div className="text-sm mt-2">5 Recent Applicants</div>
        </div>
      </div>

      {/* Other Companies */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-center sm:text-left">
            View more Design companies
          </h2>
          <button className="text-blue-600 mt-2 sm:mt-0 hover:underline">
            View All Companies
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {otherCompanies.map((company) => (
            <div
              key={company.name}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg text-center mb-2">
                {company.name}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-2">
                {company.location}
              </p>
              <p className="text-sm text-center text-green-600 font-semibold">
                {company.jobCount} Jobs Available
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobTurnityClone;
