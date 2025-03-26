import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      salaryMin: 50000,
      salaryMax: 80000,
      categories: ["Development", "Web"],
      requiredSkills: ["React", "JavaScript", "CSS"],
      jobDescription: "Develop and maintain web applications.",
      responsibilities: "Write clean code, collaborate with designers.",
      whoYouAre: "Passionate about frontend development.",
      niceToHaves: "Experience with TypeScript.",
      status: "Live",
      datePosted: new Date("2023-10-01"),
      dueDate: new Date("2023-11-01"),
      jobType: "Full-Time",
      applicants: 10,
      needs: 5,
      companyId: "company1",
    },
    {
      id: 2,
      title: "Backend Developer",
      salaryMin: 60000,
      salaryMax: 90000,
      categories: ["Development", "API"],
      requiredSkills: ["Node.js", "Express", "MongoDB"],
      jobDescription: "Build scalable backend systems.",
      responsibilities: "Design APIs, optimize database queries.",
      whoYouAre: "Experienced in backend technologies.",
      niceToHaves: "Knowledge of cloud platforms.",
      status: "Draft",
      datePosted: new Date("2023-09-15"),
      dueDate: new Date("2023-10-15"),
      jobType: "Remote",
      applicants: 5,
      needs: 3,
      companyId: "company2",
    },
  ]);

  // Thêm một công việc mới
  const addJob = (newJob) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      { ...newJob, id: prevJobs.length + 1, datePosted: new Date() },
    ]);
  };

  // Cập nhật trạng thái của công việc
  const updateJobStatus = (jobId, newStatus) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, updateJobStatus }}>
      {children}
    </JobContext.Provider>
  );
};
JobProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JobProvider;
