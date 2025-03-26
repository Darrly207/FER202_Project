import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CompanyContext = createContext();

const CompanyProvider = ({ children }) => {
  // Dữ liệu công ty giả lập với id và userID
  const [companies, setCompanies] = useState([
    {
      id: 1,
      userID: 2,
      name: "Tech Corp",
      logoSrc:
        "https://static.topcv.vn/company_logos/x9h2bvu1Bl3iDgPXe49bBxT61beFA7LC_1676254077____c8b91a7ee5311800c6caaebae43541aa.jpg",
      description: "Leading Software Development Company",
      location: "Hà Nội, Việt Nam",
      contactInfo: {
        address: "456 George Street, Sydney",
        phone: "+61 2 9876 5432",
        email: "contact@techcorp.com",
        website: "https://techcorp.com",
      },
      aboutUs:
        "Chúng tôi là công ty phần mềm hàng đầu với hơn 10 năm kinh nghiệm, phát triển các giải pháp công nghệ tiên tiến.",
      visionMission:
        "Trở thành công ty công nghệ hàng đầu thế giới, đổi mới và phát triển bền vững.",
      services: [
        "Custom Software Development",
        "Cloud & DevOps Services",
        "AI & Machine Learning Solutions",
        "Mobile & Web Application Development",
        "IT Consulting & Digital Transformation",
      ],
      teamMembers: [
        {
          name: "Nguyễn Minh Quang",
          position: "CEO",
          imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          name: "Lê Văn Bình",
          position: "CTO",
          imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
          name: "Trần Thị Hạnh",
          position: "Head of Design",
          imgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
        },
      ],
      achievements: [
        "Top 10 công ty phần mềm uy tín nhất Việt Nam",
        "Giải thưởng 'Best IT Company 2023'",
        "Hợp tác với hơn 500+ doanh nghiệp trên toàn cầu",
      ],
      benefits: [
        "Môi trường làm việc sáng tạo, năng động",
        "Cơ hội phát triển sự nghiệp rõ ràng",
        "Chế độ lương thưởng hấp dẫn",
      ],
      partnerships: [
        {
          name: "Google",
          logoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        },
        {
          name: "Microsoft",
          logoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        },
        {
          name: "AWS",
          logoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        },
      ],
      testimonials: [
        {
          name: "John Smith",
          position: "CEO at XYZ Corp",
          avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
          comment:
            "Tech Corp delivered outstanding software solutions, exceeding our expectations!",
        },
        {
          name: "Emily Davis",
          position: "CTO at ABC Ltd",
          avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg",
          comment:
            "Great experience working with Tech Corp. Highly skilled and professional team!",
        },
      ],
    },
  ]);

  // Lấy thông tin công ty theo id
  const getCompanyById = (UserId) => {
    return companies.find((company) => company.userID === UserId);
  };

  // Thêm một công ty mới
  const addCompany = (newCompany) => {
    setCompanies((prevCompanies) => [
      ...prevCompanies,
      { ...newCompany, id: prevCompanies.length + 1 },
    ]);
  };

  // Cập nhật thông tin công ty
  const updateCompany = (companyId, updatedData) => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === companyId ? { ...company, ...updatedData } : company
      )
    );
  };

  return (
    <CompanyContext.Provider
      value={{ companies, getCompanyById, addCompany, updateCompany }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

CompanyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CompanyProvider;
