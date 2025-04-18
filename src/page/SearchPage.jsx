import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import img1 from "../assets/image.png";
import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { JobContext } from "../context/JobContext"; // Adjust the import path as needed

const JobFinderPage = () => {
  const { jobs } = useContext(JobContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter jobs based on the search term
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 ml-22 mt-11 mb-11">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold mb-2">
          Find your{" "}
          <span className="border-b-4 border-yellow-400 text-yellow-400 text-5xl">
            dream job
          </span>
        </h1>
        <p className="text-gray-600 mb-6 mt-9 mb-9 text-xl">
          Find your next career at companies like HubSpot, Nike, and Dropbox
        </p>
      </div>

      <div className="flex gap-2 mr-16">
        <div className="flex-1 relative ml-3">
          <Search
            className="absolute left-3 top-0.5 text-gray-700 align-item-center"
            size={29}
          />
          <Input
            className="pl-10 w-full h-9 ml-3 border-b border-gray-300"
            style={{ width: "90%" }}
            placeholder="Job title or keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>
        <div className="flex-1 relative border-l border-gray-200 h-9 ml-3">
          <MapPin className="absolute left-3 top-0.5 text-gray-700" size={29} />
          <Input
            className="pl-10 ml-3 w-3/4 h-9 border-b border-gray-300"
            placeholder="Florence, Italy"
          />
        </div>
        <div className="w-2 flex items-center justify-center pb-5">
          <Button className="bg-green-600 hover:bg-green-700 text-white pl-6 pr-6 h-9 pt-2 pb-9">
            Search
          </Button>
        </div>
      </div>

      <div className="text-md text-gray-500 mb-11">
        Popular: UI Designer, UX Researcher, Android, Admin
      </div>

      {/* Main Content */}
      <div className="flex gap-8 mt-8">
        {/* Filters */}
        <div className="w-58">
          {/* ... (filters section remains unchanged) ... */}
        </div>

        {/* Job Listings */}
        <div className="flex-1 ml-8">
          <div className="flex justify-between items-center pr-9">
            <div>
              <h2 className="text-3xl font-semibold text-yellow-500">
                All Jobs
              </h2>
              <p className="text-sm text-gray-500">
                Showing {filteredJobs.length} results
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-smm text-gray-400">Sort by:</span>
              <select className="text-md">
                <option value="relevant">Most relevant</option>
                <option value="recent">Most recent</option>
                <option value="popular">Most popular</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <Card key={index} className="gap-1">
                <Link
                  to={`/JobDetail/${job.id}`}
                  className="flex justify-between items-start border-2 border-gray-200 p-4"
                >
                  <div className="flex gap-4">
                    <div className="w-18 h-18 bg-gray-100 rounded-lg">
                      <img
                        src={img1}
                        alt={job.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-gray-600">
                        {job.companyId} • {job.jobType}
                      </p>
                      <div className="flex gap-2 mt-2">
                        {job.categories.map((category, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-3 py-1 rounded-full border border-blue-200 text-blue-500 font-bold"
                          >
                            {category}
                          </span>
                        ))}
                        <span className="text-xs px-3 py-1 rounded-full border-r-2 border-green-200 text-green-500 font-bold">
                          {job.jobType}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex flex-col text-center">
                    <Button className="bg-green-600 hover:bg-green-700 pt-2 pb-2 text-white font-bold text-md mb-2 mt-2">
                      Apply
                    </Button>
                    <div className="relative w-full bg-gray-300 rounded h-2 mb-2">
                      <div
                        className="absolute h-full bg-green-500"
                        style={{
                          width: `calc(${job.applicants} / ${job.needs} * 100%)`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 flex">
                      <span className="font-bold">
                        {job.applicants} applied
                      </span>
                      <span> of {job.needs} capacity</span>
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="ghost"
              className="h-10 w-10 text-gray-800 font-bold"
            >
              &lt;
            </Button>

            {[1, 2, 3, 4, 5, "...", 23].map((page, index) => (
              <Button
                key={index}
                variant={page === 1 ? "default" : "ghost"}
                className={
                  page === 1
                    ? "bg-green-600 hover:bg-green-700 h-10 w-10 text-white rounded-md"
                    : ""
                }
              >
                {page}
              </Button>
            ))}

            <Button
              variant="ghost"
              className="h-10 w-10 text-gray-800 font-bold"
            >
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFinderPage;
