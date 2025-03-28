import { Button, Input, Select, Tabs } from "antd";
import { useContext, useState } from "react";
import SocialLinkSettingsPage from "../user/loginDetailSettingUi";
import TeamSettings from "../company/settingData";
import Sidebar from "../../components/SideBarCompany";
import { CompanyContext } from "../../context/CompanyContext"; // Import context
import { AuthContext } from "../../context/AuthContext";
const { Option } = Select;
const { TextArea } = Input;

function TodosSettingsUI() {
  const { companies, getCompanyById, updateCompany } =
    useContext(CompanyContext); // Access context
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("overview");
  const company = getCompanyById(user.id);

  if (!company) {
    return <div>Company not found</div>;
  }

  // Hàm xử lý lưu thay đổi
  const handleSaveChanges = (field, value) => {
    const updatedData = {
      contactInfo: { ...company.contactInfo, [field]: value },
    };
    updateCompany(company.id, updatedData);
  };

  return (
    <div
      className="flex justify-center overflow-hidden"
      style={{ height: "80vh" }}
    >
      <div>
        <Sidebar />
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full mx-auto overflow-y-auto">
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-2xl font-bold">Settings</h1>
          <Button type="primary" className="bg-green-600 text-white">
            Post a job
          </Button>
        </div>

        <Tabs defaultActiveKey="overview" onChange={setActiveTab}>
          <Tabs.TabPane tab="Overview" key="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label className="block font-semibold mb-2">Company Name</label>
                <Input
                  defaultValue={company.name}
                  onBlur={(e) =>
                    updateCompany(company.id, { name: e.target.value })
                  }
                />
              </div>

              {/* Address */}
              <div>
                <label className="block font-semibold mb-2">📍 Address</label>
                <Input
                  defaultValue={company.contactInfo.address}
                  onBlur={(e) => handleSaveChanges("address", e.target.value)}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold mb-2">📞 Phone</label>
                <Input
                  defaultValue={company.contactInfo.phone}
                  onBlur={(e) => handleSaveChanges("phone", e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-2">📧 Email</label>
                <Input
                  defaultValue={company.contactInfo.email}
                  onBlur={(e) => handleSaveChanges("email", e.target.value)}
                />
              </div>

              {/* Website */}
              <div>
                <label className="block font-semibold mb-2">🌐 Website</label>
                <Input
                  defaultValue={company.contactInfo.website}
                  onBlur={(e) => handleSaveChanges("website", e.target.value)}
                />
              </div>

              {/* Description */}
              <div>
                <label className="block font-semibold mb-2">Description</label>
                <TextArea
                  rows={4}
                  defaultValue={company.description}
                  maxLength={500}
                  onBlur={(e) =>
                    updateCompany(company.id, { description: e.target.value })
                  }
                />
                <div className="text-right text-sm mt-1 text-gray-400">
                  Maximum 500 characters
                </div>
              </div>
            </div>
            <div className="mt-6 text-right">
              <Button
                type="primary"
                className="bg-green-600 text-white"
                onClick={() => alert("Changes saved!")}
              >
                Save Changes
              </Button>
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Social Links" key="social">
            <SocialLinkSettingsPage />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Team" key="team">
            <TeamSettings />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default TodosSettingsUI;
