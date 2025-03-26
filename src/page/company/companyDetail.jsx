import { Input } from "antd";
import { useState } from "react";

function SocialLinkSettingsPage() {
  //   const [activeTab, setActiveTab] = useState("overview");

  //   const [companyDetails, setCompanyDetails] = useState({
  //     name: "Nomad",
  //     website: "https://www.nomad.com",
  //     locations: ["England", "Japan", "Australia"],
  //     employees: "1 - 50",
  //     industry: "Technology",
  //     dateFounded: { day: "31", month: "July", year: "2021" },
  //     techStack: ["HTML 5", "CSS 3", "JavaScript"],
  //     description:
  //       "Nomad is part of the Information Technology Industry. We believe travellers want to experience real life and meet local people. Nomad has 30 total employees across all of its locations and generates $150 million in sales.",
  //   });

  const [socialLinks, setSocialLinks] = useState({
    instagram: "https://www.instagram.com/nomad/",
    twitter: "https://twitter.com/nomad/",
    facebook: "https://www.facebook.com/nomad/",
    linkedin: "",
    youtube: "",
  });

  const handleSocialChange = (platform, value) => {
    setSocialLinks({ ...socialLinks, [platform]: value });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <p className="font-semibold mb-4">
          Basic Information
          <br />
          <span className="text-gray-500 text-sm">
            Add elsewhere links to your company profile. You can add only
            username without full https links.
          </span>
        </p>
      </div>
      <div>
        <label className="font-semibold">Instagram</label>
        <Input
          value={socialLinks.instagram}
          onChange={(e) => handleSocialChange("instagram", e.target.value)}
          className="mb-4"
        />
        <label className="font-semibold">Twitter</label>
        <Input
          value={socialLinks.twitter}
          onChange={(e) => handleSocialChange("twitter", e.target.value)}
          className="mb-4"
        />
        <label className="font-semibold">Facebook</label>
        <Input
          value={socialLinks.facebook}
          onChange={(e) => handleSocialChange("facebook", e.target.value)}
          className="mb-4"
        />
        <label className="font-semibold">LinkedIn</label>
        <Input
          placeholder="Enter your LinkedIn address"
          value={socialLinks.linkedin}
          onChange={(e) => handleSocialChange("linkedin", e.target.value)}
          className="mb-4"
        />
        <label className="font-semibold">YouTube</label>
        <Input
          placeholder="Enter your YouTube address"
          value={socialLinks.youtube}
          onChange={(e) => handleSocialChange("youtube", e.target.value)}
          className="mb-4"
        />
      </div>
    </div>
  );
}

export default SocialLinkSettingsPage;
