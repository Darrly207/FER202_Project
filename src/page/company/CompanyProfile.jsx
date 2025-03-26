import { useContext, useEffect } from "react";
import Siderbar from "../../components/SideBar";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { CompanyContext } from "../../context/CompanyContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CompanyProfile = () => {
  const { companies, getCompanyById } = useContext(CompanyContext);
  const { user } = useContext(AuthContext);
  const router = useNavigate();
  useEffect(() => {
    if (user.role !== "company") {
      router("/user/DashBoard");
    }
    if (!user) {
      router("/");
    }
  }, [user, router]);

  const company = getCompanyById(user.id);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Siderbar />

      {/* Main Content */}
      <div className="ml-64 flex-1 max-w-4xl mx-auto p-6">
        {/* Header */}
        <Card className="relative p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg">
          <div className="flex items-center">
            <Avatar
              className="w-20 h-20 border-4 border-white rounded-full"
              src={company.logoSrc}
              alt={company.name}
            />
            <div className="ml-4">
              <h1 className="text-2xl font-semibold">{company.name}</h1>
              <p className="text-lg">{company.description}</p>
              <p className="text-sm">{company.location}</p>
            </div>
          </div>
          <Button className="absolute top-4 right-4 bg-white text-black">
            Edit Profile
          </Button>
        </Card>

        {/* Contact Info */}
        <Card id="contact" className="p-4">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <p>
            <strong>📍 Address:</strong> {company.contactInfo.address}
          </p>
          <p>
            <strong>📞 Phone:</strong> {company.contactInfo.phone}
          </p>
          <p>
            <strong>📧 Email:</strong> {company.contactInfo.email}
          </p>
          <p>
            <strong>🌐 Website:</strong>{" "}
            <a href={company.contactInfo.website} className="text-blue-500">
              {company.contactInfo.website}
            </a>
          </p>
        </Card>

        {/* About Company */}
        <Card className="mt-6 p-4">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="text-gray-600">{company.aboutUs}</p>
        </Card>

        {/* Our Vision & Mission */}
        <Card className="mt-6 p-4">
          <h2 className="text-lg font-semibold">Our Vision & Mission</h2>
          <p className="text-gray-600">{company.visionMission}</p>
        </Card>

        {/* Our Services / Products */}
        <Card className="mt-6 p-4">
          <h2 className="text-lg font-semibold">Our Services / Products</h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {company.services.map((service, index) => (
              <li key={index}>🔹 {service}</li>
            ))}
          </ul>
        </Card>

        {/* Key Team Members */}
        <Card className="mt-6 p-4">
          <h2 className="text-lg font-semibold mb-4">Key Team Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {company.teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md"
              >
                <Avatar
                  className="w-24 h-24 border-2 border-gray-300 rounded-full"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <p className="mt-3 text-lg font-semibold">{member.name}</p>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Testimonials */}
        <Card className="mt-6 p-4">
          <h2 className="text-lg font-semibold">Client Testimonials</h2>
          <div className="mt-4 space-y-4">
            {company.testimonials.map((testimonial, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Avatar
                  className="w-12 h-12 rounded-full"
                  src={testimonial.avatarSrc}
                  alt={testimonial.name}
                />
                <div>
                  <p className="text-sm font-semibold">
                    {testimonial.name}, {testimonial.position}
                  </p>
                  <p className="text-gray-600">{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CompanyProfile;
