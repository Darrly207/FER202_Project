import { useState } from "react";
import { Button, Checkbox } from "antd";

function NotificationsSettingsUI() {
  const [notifications, setNotifications] = useState({
    applications: true,
    jobs: false,
    recommendations: false,
  });

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Basic Information</h2>
        <p className="text-sm text-gray-500">
          This is notifications preferences that you can update anytime.
        </p>
      </div>
      <div className="border-t pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold">Notifications</h3>
          <p className="text-sm text-gray-500 mb-4">
            Customize your preferred notification settings
          </p>
        </div>
        <div className="space-y-4">
          <Checkbox
            checked={notifications.applications}
            onChange={() => handleNotificationChange("applications")}
          >
            {" "}
            <span className="font-semibold">Applications</span>
            <p className="text-sm text-gray-500">
              These are notifications for jobs that you have applied to
            </p>
          </Checkbox>
          <Checkbox
            checked={notifications.jobs}
            onChange={() => handleNotificationChange("jobs")}
          >
            {" "}
            <span className="font-semibold">Jobs</span>
            <p className="text-sm text-gray-500">
              These are notifications for job openings that suit your profile
            </p>
          </Checkbox>
          <Checkbox
            checked={notifications.recommendations}
            onChange={() => handleNotificationChange("recommendations")}
          >
            {" "}
            <span className="font-semibold">Recommendations</span>
            <p className="text-sm text-gray-500">
              These are notifications for personalized recommendations from our
              recruiters
            </p>
          </Checkbox>
          <div className="mt-6">
            <Button type="primary" className="bg-green-600 text-white">
              Update Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsSettingsUI;
