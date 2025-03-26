import Footer from "../components/Footer";
import img from "../assets/image.png";
export default function HomePage() {
  const categories = [
    { name: "Design", count: "1.2k+ Jobs" },
    { name: "Sales", count: "800+ Jobs" },
    { name: "Marketing", count: "1.4k+ Jobs" },
    { name: "Finance", count: "900+ Jobs" },
    { name: "Technology", count: "2k+ Jobs" },
    { name: "Engineering", count: "1.5k+ Jobs" },
    { name: "Business", count: "1.1k+ Jobs" },
    { name: "Human Resource", count: "700+ Jobs" },
  ];

  const featuredJobs = [
    {
      title: "Lead Marketing",
      company: "Apple Inc.",
      location: "California, USA",
      salary: "$50k-$70k",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      title: "Brand Designer",
      company: "Google LLC",
      location: "New York, USA",
      salary: "$60k-$80k",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      title: "Front Marketing",
      company: "Netflix",
      location: "Remote",
      salary: "$45k-$65k",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      title: "Visual Designer",
      company: "Microsoft",
      location: "Seattle, USA",
      salary: "$55k-$75k",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      title: "Lead Marketing",
      company: "Apple Inc.",
      location: "California, USA",
      salary: "$50k-$70k",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      title: "Brand Designer",
      company: "Google LLC",
      location: "New York, USA",
      salary: "$60k-$80k",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      title: "Front Marketing",
      company: "Netflix",
      location: "Remote",
      salary: "$45k-$65k",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      title: "Visual Designer",
      company: "Microsoft",
      location: "Seattle, USA",
      salary: "$55k-$75k",
      type: "Full Time",
      tags: ["Marketing", "Design"],
    },
  ];

  return (
    <div className="bg-white text-slate-900 p-4 sm:p-6 w-full max-w-full">
      {/* Hero Section */}
      <div className="mb-16 px-4 sm:px-9">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold pb-6 sm:pb-9">
          Discover
          <br />
          more than
          <br />
          <span className="text-yellow-400 border-b-2 border-yellow-500">
            5000+ Jobs
          </span>
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full sm:flex-1 bg-white text-slate-900 p-3 sm:p-4 rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full sm:flex-1 bg-white text-slate-900 p-3 sm:p-4 rounded-lg"
          />
          <button className="w-full sm:w-auto bg-green-700 p-3 sm:px-8 rounded-lg cursor-pointer text-white hover:bg-green-900">
            Search for jobs
          </button>
        </div>

        {/* Company Logos */}
        <div className="flex flex-col space-y-4 opacity-50">
          <span className="text-sm sm:text-lg">Companies we helped grow:</span>
          <div className="flex flex-wrap items-center justify-between space-x-2 sm:space-x-8 cursor-pointer">
            {["Coinbase", "Intel", "Tesla", "AMD", "Talkit"].map((company) => (
              <span
                key={company}
                className="text-xl sm:text-4xl font-mono font-semibold tracking-widest uppercase"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-16 px-4 sm:px-9">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">
            Explore by category
          </h2>
          <button className="text-blue-500">Show all jobs</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="p-4 sm:p-6 rounded-xl hover:bg-green-700 hover:text-white transition-colors cursor-pointer bg-white"
            >
              <h3 className="font-semibold mb-2 text-black text-sm sm:text-base">
                {category.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="mb-16 px-4 sm:px-9">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">
            Featured jobs
          </h2>
          <button className="text-blue-500">Show all jobs {"->"}</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredJobs.map((job, index) => (
            <div
              key={index}
              className="hover:bg-green-700 bg-white p-5 sm:p-6 rounded-xl cursor-pointer"
            >
              <img
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg mb-4"
                src={img}
                alt="..."
              />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                {job.title}
              </h3>
              <p className="text-xs sm:text-sm text-black mb-4">
                {job.company} • {job.location}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-gray-400">
                  {job.salary}
                </span>
                <span className="text-xs sm:text-sm bg-blue-600/20 text-blue-500 px-2 sm:px-3 py-1 rounded-full">
                  {job.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
