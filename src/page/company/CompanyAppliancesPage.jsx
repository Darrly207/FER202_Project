import React, { useContext } from "react";
import { ApplicantContext } from "../../context/ApplicantContext";
import { AuthContext } from "../../context/AuthContext";
import SidebarCompany from "../../components/SideBarCompany";

const CompanyAppliancesPage = () => {
  const { applicants, updateApplicantStatus } = useContext(ApplicantContext); // Lấy danh sách ứng viên và hàm cập nhật trạng thái
  const { user } = useContext(AuthContext); // Lấy thông tin người dùng từ AuthContext

  // Kiểm tra nếu user không phải là company
  if (user?.role !== "company") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">
          Access Denied: This page is only for companies.
        </h1>
      </div>
    );
  }

  const companyApplicants = applicants.filter(
    (applicant) => applicant.companyID === 1
  );

  const handleStatusChange = (applicantId, newStatus) => {
    updateApplicantStatus(applicantId, newStatus); // Cập nhật trạng thái ứng viên
  };

  return (
    <div className="flex">
      <SidebarCompany />
      <div className="flex-1 max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Applications for Your Jobs
        </h1>

        {companyApplicants.length === 0 ? (
          <p className="text-gray-600">No applications found for your jobs.</p>
        ) : (
          <div className="space-y-4">
            {companyApplicants.map((applicant) => (
              <div
                key={applicant.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {applicant.fullName}
                  </h2>
                  <select
                    value={applicant.status}
                    onChange={(e) =>
                      handleStatusChange(applicant.id, e.target.value)
                    }
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                  >
                    <option value="In Review">In Review</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                <p className="text-gray-600">
                  <span className="font-bold">Email:</span> {applicant.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Phone:</span>{" "}
                  {applicant.phoneNumber}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Current Job Title:</span>{" "}
                  {applicant.currentJobTitle}
                </p>
                <p className="text-gray-600">
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
                <p className="text-gray-600">
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
                <p className="text-gray-600">
                  <span className="font-bold">Additional Info:</span>{" "}
                  {applicant.additionalInfo}
                </p>
                <p className="text-gray-600">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyAppliancesPage;
