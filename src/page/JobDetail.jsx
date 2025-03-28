import React, { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext";
import { ApplicantContext } from "../context/ApplicantContext";
import { AuthContext } from "../context/AuthContext";
import CreateApplicationDialog from "../components/CreateApplicationDialog";

const JobDetail = () => {
  const { jobs } = useContext(JobContext);
  const { addApplicant } = useContext(ApplicantContext); // Use ApplicantContext
  const { user } = useContext(AuthContext); // Use AuthContext
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Find the specific job based on the ID from the URL
  const job = jobs.find((j) => j.id === parseInt(jobId));

  // If no job is found, show an error message
  if (!job) {
    return (
      <div className="flex min-h-screen bg-gray-100 font-sans justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <Link to="/" className="text-blue-500 underline">
            Back to Job Finder
          </Link>
        </div>
      </div>
    );
  }

  // Handle Apply button click
  const handleApply = () => {
    if (!user) {
      // If user is not logged in, navigate to login page
      navigate("/LoginForm");
    } else {
      setSelectedJob(job);
      setIsDialogOpen(true);
    }
  };

  // Handle application submission
  const handleApplicationSubmit = (applicationData) => {
    console.log("Application Data:", applicationData); // Log the application data
    addApplicant(applicationData); // Save application to ApplicantContext
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <div className="flex w-full p-8 gap-8">
        {/* Left Column */}
        <div className="flex-7 w-2/3">
          <div className="flex flex-col mb-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Job Description
              </h1>
              <Link to="/" className="text-blue-500 underline">
                Back to homepage
              </Link>
            </div>

            <div className="flex items-center mb-6">
              <img
                src="https://placehold.co/60x60"
                alt="Company logo"
                className="w-16 h-16 rounded-full mr-4 shadow-md"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {job.title}
                </h2>
                <p className="text-gray-500">
                  {job.companyId} • {job.jobType}
                </p>
              </div>
              <button
                onClick={handleApply}
                disabled={user?.role === "company"} // Disable if the user role is "company"
                className={`ml-auto px-6 py-2 rounded-lg shadow-md ${
                  user?.role === "company"
                    ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Disabled style
                    : "bg-green-600 hover:bg-green-700 text-white" // Enabled style
                }`}
              >
                Apply
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {job.jobDescription}
              </p>
            </div>
            <div className="mb-7">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {job.responsibilities.split(". ").map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
            <div className="mb-7">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Who You Are
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {job.whoYouAre.split(". ").map((who, index) => (
                  <li key={index}>{who}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Nice-To-Haves
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {job.niceToHaves.split(", ").map((nice, index) => (
                  <li key={index}>{nice}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-1/3 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              About this role
            </h3>
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">{job.applicants} applied</span>{" "}
                of {job.needs} capacity
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{
                    width: `calc(${job.applicants} / ${job.needs} * 100%)`,
                  }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Apply Before:</span>{" "}
                {job.dueDate.toLocaleDateString()}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Job Posted On:</span>{" "}
                {job.datePosted.toLocaleDateString()}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Job Type:</span> {job.jobType}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Salary:</span> ${job.salaryMin}
                k-${job.salaryMax}k USD
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog for creating an application */}
      {isDialogOpen && (
        <CreateApplicationDialog
          job={selectedJob}
          onClose={() => setIsDialogOpen(false)}
          onSubmit={handleApplicationSubmit} // Pass the handler
        />
      )}
    </div>
  );
};

export default JobDetail;
