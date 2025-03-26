// LoginDetailSettingsUI.jsx
// Component for managing the Login Details section in user profile settings

import { useState } from "react";
import { Button, Input } from "antd";
import { CheckCircleTwoTone, InfoCircleOutlined } from "@ant-design/icons";

// Initial profile data
const initialProfile = {
  email: "jakeygyll@email.com",
};

const LoginDetailSettingsUI = () => {
  const [profile, setProfile] = useState(initialProfile);

  return (
    <div className="space-y-6">
      {/* Basic Information Section */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-semibold">Basic Information</h2>
        <p className="text-sm text-gray-500 mb-2">
          This is login information that you can update anytime.
        </p>
      </div>
      <div className="border-t pt-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">{profile.email}</span>
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        </div>
        <p className="text-sm text-gray-500">Your email address is verified.</p>
      </div>

      {/* Password Management Section */}
      <div className="border-t pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-semibold mb-1">New Password</h3>
            <p className="text-sm text-gray-500 mb-2">
              Manage your password to make sure it is safe
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Old Password Input */}
          <div>
            <label className="block font-semibold mb-1">Old Password</label>
            <Input.Password placeholder="Enter your old password" />
            <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
          </div>

          {/* New Password Input */}
          <div>
            <label className="block font-semibold mb-1">New Password</label>
            <Input.Password placeholder="Enter your new password" />
            <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
          </div>
        </div>

        {/* Change Password Button */}
        <div className="mt-6">
          <Button type="primary" className="bg-green-600">
            Change Password
          </Button>
        </div>
      </div>

      {/* Close Account Link */}
      <div className="mt-6 text-right">
        <Button type="link" danger icon={<InfoCircleOutlined />}>
          Close Account
        </Button>
      </div>
    </div>
  );
};

export default LoginDetailSettingsUI;
