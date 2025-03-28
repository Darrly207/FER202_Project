import React, { useContext } from "react";
import { ApplicantContext } from "../../context/ApplicantContext";
import { AuthContext } from "../../context/AuthContext";
import SidebarUser from "../../components/SidebarUser";

const UserAppliancesPage = () => {
  const { applicants } = useContext(ApplicantContext); // Lấy danh sách ứng viên từ ApplicantContext
  const { user } = useContext(AuthContext); // Lấy thông tin người dùng từ AuthContext

  // Kiểm tra nếu user chưa đăng nhập
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">
          Please log in to view your applications.
        </h1>
      </div>
    );
  }

  // Lọc danh sách ứng viên theo userID
  const userApplicants = applicants.filter(
    (applicant) => applicant.userID === user.id
  );

  return (
    <div className="flex bg-gray-50">
      <SidebarUser />
      <div className="flex-1 max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Your Applications
        </h1>

        {userApplicants.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-600 text-lg">
              You have not applied for any jobs yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userApplicants.map((applicant) => (
              <div
                key={applicant.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Job ID: {applicant.jobID}
                </h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-bold">Company ID:</span>{" "}
                  {applicant.companyID}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-bold">Current Job Title:</span>{" "}
                  {applicant.currentJobTitle}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-bold">LinkedIn:</span>{" "}
                  <a
                    href={applicant.linkedinURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {applicant.linkedinURL}
                  </a>
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-bold">Portfolio:</span>{" "}
                  <a
                    href={applicant.portfolioURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {applicant.portfolioURL}
                  </a>
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-bold">Additional Info:</span>{" "}
                  {applicant.additionalInfo}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-bold">Resume:</span>{" "}
                  <a
                    href={applicant.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {applicant.resume}
                  </a>
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Status:</span>{" "}
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      applicant.status === "In Review"
                        ? "bg-yellow-100 text-yellow-600"
                        : applicant.status === "Shortlisted"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {applicant.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAppliancesPage;
