import React, { useState, useContext } from "react";
import Sidebar from "../components/SidebarUser";
import MessageList from "../components/message/MessageList";
import MessageDetail from "../components/message/MessageDetail";
import DashboardHeader from "../components/DashboardHeader";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext từ Firebase

const MessageCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useContext(AuthContext); // Lấy user từ Firebase AuthContext
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [isMobileMessageDetailView, setIsMobileMessageDetailView] =
    useState(false);

  // Nếu dữ liệu user chưa tải xong, hiển thị loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading user data...</p>
      </div>
    );
  }

  // Nếu không có người dùng đăng nhập, hiển thị thông báo
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">
          Please log in to access messages.
        </p>
      </div>
    );
  }

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    // On mobile, switch to message detail view
    if (window.innerWidth < 768) {
      setIsMobileMessageDetailView(true);
    }
  };

  const handleBackToMessageList = () => {
    setIsMobileMessageDetailView(false);
  };

  return (
    <div className="flex bg-white h-screen w-full overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-1 overflow-hidden w-full">
        {/* Header */}
        <div className="w-full mt-6 px-4 border-b-2 border-gray-200">
          <DashboardHeader
            dashboardHeaderName={"Messages"}
            onBackClick={
              isMobileMessageDetailView ? handleBackToMessageList : undefined
            }
          />
        </div>

        <div className="flex flex-row flex-1 w-full overflow-hidden">
          {/* Message List - Hidden on mobile when in message detail view */}
          <div
            className={`
            ${isMobileMessageDetailView ? "hidden md:flex" : "flex"}
            flex-1 w-full md:w-1/3 border-r border-gray-300 overflow-y-auto
          `}
          >
            <MessageList
              onSelectConversation={handleSelectConversation}
              selectedConversationId={selectedConversation?.id}
              user={user} // Truyền user từ Firebase
            />
          </div>

          {/* Message Detail - Full width on mobile, partial width on desktop */}
          <div
            className={`
            ${isMobileMessageDetailView ? "w-full" : "hidden md:flex md:w-2/3"}
            overflow-y-auto
          `}
          >
            {selectedConversation ? (
              <MessageDetail conversation={selectedConversation} user={user} />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Select a conversation to view messages
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCenter;
``;
