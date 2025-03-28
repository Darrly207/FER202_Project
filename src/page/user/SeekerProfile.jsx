import React from "react";
import Sidebar from "../../components/SideBarCompany";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import Footer from "../../components/Footer";

const SeekerProfile = () => {
  return (
    <div className="flex p-5 w-full">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 max-w-6xl mx-auto p-2 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column (Main Content) */}
        <div className="md:col-span-2 space-y-6">
          {/* Header */}
          <Card className="relative p-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg">
            <div className="flex items-center">
              <Avatar
                className="w-20 h-20 border-4 border-white rounded-full"
                src="https://th.bing.com/th/id/OIP.dwz5xYr2VOjNkFYmsrxrIwHaHT?rs=1&pid=ImgDetMain"
                alt="Nguyễn Văn A"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-semibold">Nguyễn Văn A</h1>
                <p className="text-lg">Frontend Developer @ Tech Corp</p>
                <p className="text-sm">Hà Nội, Việt Nam</p>
              </div>
            </div>
            <Button className="absolute top-4 right-4 bg-white text-black">
              Edit Profile
            </Button>
          </Card>

          {/* Contact Info */}
          <Card className="p-4">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <p>
              <strong>📍 Address:</strong> 123 Nguyễn Trãi, Hà Nội
            </p>
            <p>
              <strong>📞 Phone:</strong> 0987 654 321
            </p>
            <p>
              <strong>📧 Email:</strong> nguyenvana@gmail.com
            </p>
          </Card>

          {/* About Me */}
          <Card className="p-4">
            <h2 className="text-lg font-semibold">About Me</h2>
            <p className="text-gray-600">
              A frontend developer with 3 years of experience in web application
              development. With my skills, adaptability, and professional
              attitude, I am confident that I meet the criteria for
              collaboration and growth. Contact me now.
            </p>
          </Card>

          {/* Skills */}
          <Card className="p-4">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="flex gap-2 mt-2">
              <Badge className="bg-black text-white">React</Badge>
              <Badge className="bg-black text-white">JavaScript</Badge>
              <Badge className="bg-black text-white">TailwindCSS</Badge>
            </div>
          </Card>

          {/* Experience */}
          <div className="flex space-x-20">
            <Card className="p-4">
              <h2 className="text-lg font-semibold">Work Experience</h2>
              <div className="mt-2">
                <h3 className="text-md font-semibold">Tech Corp</h3>
                <p className="text-sm text-gray-600">
                  Frontend Developer (2020 - Present)
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Phát triển UI/UX cho ứng dụng web.</li>
                  <li>Tối ưu hiệu suất trang web.</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold">FPT Software</h3>
                <p className="text-sm text-gray-600">
                  Intern Developer (2019 - 2020)
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Tham gia dự án phát triển landing page.</li>
                  <li>Học tập và làm việc với ReactJS.</li>
                </ul>
              </div>
            </Card>

            {/* Projects */}
            <Card className="p-4">
              <h2 className="text-lg font-semibold">Personal Projects</h2>
              <div className="mt-2">
                <h3 className="text-md font-semibold">JobFinder App</h3>
                <p className="text-sm text-gray-600">
                  Ứng dụng tìm kiếm việc làm kết hợp AI.
                </p>
                <p className="text-sm">
                  <strong>Tech Stack:</strong> React, Firebase, TailwindCSS
                </p>
                <a href="#" className="text-blue-500">
                  View on GitHub
                </a>
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold">Portfolio Website</h3>
                <p className="text-sm text-gray-600">
                  Trang cá nhân giới thiệu dự án.
                </p>
                <p className="text-sm">
                  <strong>Tech Stack:</strong> Next.js, TailwindCSS
                </p>
                <a href="#" className="text-blue-500">
                  View Portfolio
                </a>
              </div>
            </Card>
          </div>

          {/* Certificates */}
        </div>

        {/* Right Column (Languages & Education) */}
        <div className="space-y-6">
          {/* Languages */}
          <Card className="p-4">
            <h2 className="text-lg font-semibold">Languages</h2>
            <ul className="mt-2">
              <li>
                <strong>🇻🇳 Tiếng Việt</strong> - Native
              </li>
              <li>
                <strong>🇬🇧 Tiếng Anh</strong> - Intermediate
              </li>
              <li>
                <strong>JP Tiếng Nhật</strong> - Intermediate
              </li>
            </ul>
          </Card>

          {/* Education */}
          <Card className="p-4">
            <h2 className="text-lg font-semibold">Education</h2>
            <div className="mt-2 space-y-2">
              <div>
                <h3 className="text-md font-semibold">
                  Đại học Công nghệ - ĐHQGHN
                </h3>
                <p className="text-sm text-gray-600">
                  Chuyên ngành: Khoa học máy tính (2015 - 2019)
                </p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Khoá học ReactJS - F8</h3>
                <p className="text-sm text-gray-600">
                  Học sâu về React, Redux, Next.js (2022)
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <h2 className="text-lg font-semibold">Certificates</h2>
            <ul className="mt-2 list-disc list-inside">
              <li>Google UX Design Professional Certificate</li>
              <li>React Developer Certification - Udemy</li>
              <li>Frontend Developer Nanodegree - Udacity</li>
            </ul>
          </Card>
        </div>
      </div>
      <div className="p-10"></div>
    </div>
  );
};

export default SeekerProfile;
