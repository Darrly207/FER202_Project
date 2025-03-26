// import Navbar from "./components/Navbar";

const JobDetail = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex w-full p-8">
        <div className="flex-7">
          <div className="flex flex-col mb-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Job Description</h1>
              <a className="text-blue-500" href="#">
                Back to homepage
              </a>
            </div>

            <div className="flex items-center mb-2 justify-between w-4/5 ">
              <img
                src="https://placehold.co/60x60"
                alt="Company logo"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">Social Media Assistant</h2>
                <p className="text-gray-500">
                  Stripe • Paris, France • Full-Time
                </p>
              </div>
              <button className="ml-auto bg-green-500 text-white px-8 py-2 rounded-lg">
                Apply
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">
                  Stripe is looking for Social Media Marketing expert to help
                  manage our online networks. You will be responsible for
                  monitoring our social media channels, creating content,
                  finding effective ways to engage the community and incentivize
                  others to engage on our channels.
                </p>
              </div>
              <div className="mb-7">
                <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    Community engagement to ensure that is supported and
                    actively represented online
                  </li>
                  <li>
                    Focus on social media content development and publication
                  </li>
                  <li>Marketing and strategy support</li>
                  <li>
                    Stay on top of trends on social media platforms, and suggest
                    content ideas to the team
                  </li>
                  <li>Engage with online communities</li>
                </ul>
              </div>
              <div className="mb-7">
                <h3 className="text-lg font-semibold mb-2">Who You Are</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    You get energy from people and building the ideal work
                    environment
                  </li>
                  <li>
                    You have a sense for beautiful spaces and office experiences
                  </li>
                  <li>
                    You are a confident office manager, ready for added
                    responsibilities
                  </li>
                  <li>You&apos;re detail-oriented and creative</li>
                  <li>
                    You&apos;re a growth marketer and know how to run campaigns
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Nice-To-Haves</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Fluent in English</li>
                  <li>Project management skills</li>
                  <li>Copy editing skills</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-x-8">
              <div className="bg-white py-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">About this role</h3>
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">5 applied</span> of 10
                    capacity
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Apply Before:</span> July
                    31, 2021
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Job Posted On:</span> July
                    1, 2021
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Job Type:</span> Full-Time
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Salary:</span> $75k-$85k USD
                  </p>
                </div>
              </div>
              <div className="bg-white py-6 rounded-lg shadow-md mt-8 w-3/4">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="flex space-x-2">
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                    Marketing
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    Design
                  </span>
                </div>
              </div>
              <div className="bg-white py-6 rounded-lg shadow-md mt-8 w-3/4">
                <h3 className="text-lg font-semibold mb-4">Required Skills</h3>
                <div className="flex flex-wrap space-x-2">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    Project Management
                  </span>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                    Copywriting
                  </span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    English
                  </span>
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
                    Social Media Marketing
                  </span>
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                    Copy Editing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
