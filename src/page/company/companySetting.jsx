import { Button, Input, Select, Tabs } from "antd";
import { useState } from "react";
import SocialLinkSettingsPage from "../user/loginDetailSettingUi";
import TeamSettings from "../company/settingData";
import Sidebar from "../../components/SideBar";
const { Option } = Select;
const { TextArea } = Input;

function TodosSettingsUI() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "Nomad",
    website: "https://www.nomad.com",
    locations: ["England", "Japan", "Australia"],
    employees: "1 - 50",
    industry: "Technology",
    founded: {
      day: "31",
      month: "July",
      year: "2021",
    },
    techStack: ["HTML 5", "CSS 3", "Javascript"],
    description:
      "Nomad is part of the Information Technology Industry. We believe travellers want to experience real life and meet local people. Nomad has 30 total employees across all of its locations and generates $150 million in sales.",
  });

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex">
      <div>
        <Sidebar />
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full mx-auto">
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-2xl font-bold">Settings</h1>
          <Button type="primary" className="bg-green-600 text-white">
            Post a job
          </Button>
        </div>

        <Tabs defaultActiveKey="overview" onChange={setActiveTab}>
          <Tabs.TabPane tab="Overview" key="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">Company Name</label>
                <Input defaultValue={companyInfo.name} />
              </div>
              <div>
                <label className="block font-semibold mb-2">Website</label>
                <Input defaultValue={companyInfo.website} />
              </div>
              <div>
                <label className="block font-semibold mb-2">Location</label>
                <Select
                  mode="multiple"
                  defaultValue={companyInfo.locations}
                  style={{ width: "100%" }}
                >
                  <Option value="England">England</Option>
                  <Option value="Japan">Japan</Option>
                  <Option value="Australia">Australia</Option>
                </Select>
              </div>
              <div>
                <label className="block font-semibold mb-2">
                  Number of Employees
                </label>
                <Select
                  defaultValue={companyInfo.employees}
                  style={{ width: "100%" }}
                >
                  <Option value="1 - 50">1 - 50</Option>
                  <Option value="51 - 200">51 - 200</Option>
                </Select>
              </div>
              <div>
                <label className="block font-semibold mb-2">Industry</label>
                <Select
                  defaultValue={companyInfo.industry}
                  style={{ width: "100%" }}
                >
                  <Option value="Technology">Technology</Option>
                  <Option value="Finance">Finance</Option>
                </Select>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block font-semibold mb-2">Date</label>
                  <Select
                    defaultValue={companyInfo.founded.day}
                    style={{ width: "100%" }}
                  >
                    {Array.from({ length: 31 }, (_, i) => (
                      <Option key={i + 1} value={`${i + 1}`}>
                        {i + 1}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <label className="block font-semibold mb-2">Month</label>
                  <Select
                    defaultValue={companyInfo.founded.month}
                    style={{ width: "100%" }}
                  >
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((m) => (
                      <Option key={m} value={m}>
                        {m}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <label className="block font-semibold mb-2">Year</label>
                  <Select
                    defaultValue={companyInfo.founded.year}
                    style={{ width: "100%" }}
                  >
                    {[2021, 2022, 2023, 2024, 2025].map((y) => (
                      <Option key={y} value={`${y}`}>
                        {y}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-2">Tech Stack</label>
                <Select
                  mode="multiple"
                  defaultValue={companyInfo.techStack}
                  style={{ width: "100%" }}
                >
                  <Option value="HTML 5">HTML 5</Option>
                  <Option value="CSS 3">CSS 3</Option>
                  <Option value="Javascript">Javascript</Option>
                </Select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block font-semibold mb-2">Description</label>
              <TextArea
                rows={4}
                defaultValue={companyInfo.description}
                maxLength={500}
              />
              <div className="text-right text-sm mt-1 text-gray-400">
                Maximum 500 characters
              </div>
            </div>
            <div className="mt-6 text-right">
              <Button type="primary" className="bg-green-600 text-white">
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
