import { useState } from "react";
import { Button, Input, DatePicker, Select, Radio, Tabs } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import LoginDetailSettingsUI from "../user/loginDetailSettingUi";
import NotificationsSettingsUI from "../user/notiification";

const { Option } = Select;

function UserProfileSettingsUI() {
  const [profile, setProfile] = useState({
    fullName: "Jake Gyll",
    phone: "+44 1425 571 135",
    email: "JakeyG@gmail.com",
    dob: dayjs("1997-08-09"),
    gender: "Male",
    accountType: "jobseeker",
  });

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="rounded-2xl shadow-md border p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <Button type="primary" className="bg-green-600 text-white">
            Back to homepage
          </Button>
        </div>

        <Tabs defaultActiveKey="profile">
          <Tabs.TabPane tab="My Profile" key="profile">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2 flex flex-col md:flex-row gap-4 mb-6 items-start">
                <div className="flex items-center gap-6 w-full">
                  <div className="flex flex-col items-center text-center gap-2">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Profile"
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1 border border-dashed border-green-500 rounded-lg p-4 text-center">
                    <p className="text-green-600 font-semibold cursor-pointer">
                      Click to replace or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (max. 400 x 400px)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Full Name *</label>
                <Input value={profile.fullName} />
              </div>
              <div>
                <label className="block font-medium mb-1">Phone Number *</label>
                <Input value={profile.phone} />
              </div>
              <div>
                <label className="block font-medium mb-1">Email *</label>
                <Input value={profile.email} />
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Date of Birth *
                </label>
                <DatePicker
                  className="w-full"
                  value={profile.dob}
                  format="DD/MM/YYYY"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Gender *</label>
                <Select className="w-full" value={profile.gender}>
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <label className="block font-medium mb-2">Account Type</label>
              <Radio.Group value={profile.accountType}>
                <Radio value="jobseeker">
                  <div>
                    <span className="font-semibold">Job Seeker</span>
                    <div className="text-sm text-gray-500">
                      Looking for a job
                    </div>
                  </div>
                </Radio>
                <Radio value="employer">
                  <div>
                    <span className="font-semibold">Employer</span>
                    <div className="text-sm text-gray-500">
                      Hiring, sourcing candidates, or posting a job
                    </div>
                  </div>
                </Radio>
              </Radio.Group>
            </div>

            <div className="mt-8 text-right">
              <Button type="primary" className="bg-green-600 text-white">
                Save Profile
              </Button>
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Login Details" key="login">
            <LoginDetailSettingsUI />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Notifications" key="notifications">
            <NotificationsSettingsUI />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default UserProfileSettingsUI;
