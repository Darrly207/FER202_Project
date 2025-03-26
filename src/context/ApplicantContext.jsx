import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ApplicantContext = createContext();

const ApplicantProvider = ({ children }) => {
  // Danh sách ứng viên giả lập
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      jobID: 1,
      userID: "user1",
      companyID: "company1",
      fullName: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      currentJobTitle: "Junior Developer",
      linkedinURL: "https://linkedin.com/in/johndoe",
      portfolioURL: "https://johndoe.com",
      additionalInfo: "I have a passion for coding.",
      resume: "resume-john-doe.pdf",
      status: "In Review",
    },
    {
      id: 2,
      jobID: 2,
      userID: "user2",
      companyID: "company2",
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      phoneNumber: "0987654321",
      currentJobTitle: "Senior Developer",
      linkedinURL: "https://linkedin.com/in/janesmith",
      portfolioURL: "https://janesmith.com",
      additionalInfo: "Experienced in backend development.",
      resume: "resume-jane-smith.pdf",
      status: "Shortlisted",
    },
  ]);

  // Thêm một ứng viên mới
  const addApplicant = (newApplicant) => {
    setApplicants((prevApplicants) => [
      ...prevApplicants,
      { ...newApplicant, id: prevApplicants.length + 1 },
    ]);
  };

  // Cập nhật trạng thái của ứng viên
  const updateApplicantStatus = (applicantId, newStatus) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === applicantId
          ? { ...applicant, status: newStatus }
          : applicant
      )
    );
  };

  return (
    <ApplicantContext.Provider
      value={{ applicants, addApplicant, updateApplicantStatus }}
    >
      {children}
    </ApplicantContext.Provider>
  );
};
ApplicantProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicantProvider;
