import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "React Developer",
      salaryMin: 55000,
      salaryMax: 85000,
      categories: ["Web Development", "Frontend"],
      requiredSkills: ["React", "TypeScript", "Redux"],
      jobDescription: "Build and optimize modern React applications.",
      responsibilities: "Develop UI components, manage state effectively.",
      whoYouAre: "A problem solver passionate about UI/UX.",
      niceToHaves: "Experience with Next.js.",
      status: "Live",
      datePosted: new Date("2024-02-01"),
      dueDate: new Date("2024-03-01"),
      jobType: "Full-Time",
      applicants: 8,
      needs: 10,
      companyId: "companyA",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      salaryMin: 70000,
      salaryMax: 100000,
      categories: ["Web Development", "Full Stack"],
      requiredSkills: ["React", "Node.js", "GraphQL"],
      jobDescription: "Develop and maintain full stack web applications.",
      responsibilities: "Work on both frontend and backend solutions.",
      whoYouAre: "Comfortable with both frontend and backend tech.",
      niceToHaves: "Experience with cloud services.",
      status: "Draft",
      datePosted: new Date("2024-01-20"),
      dueDate: new Date("2024-02-20"),
      jobType: "Remote",
      applicants: 4,
      needs: 8,
      companyId: "companyB",
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
