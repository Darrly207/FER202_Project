import React, { useState, useEffect, useRef, useContext } from "react";
import {
  collection,
  addDoc,
  orderBy,
  query,
  where,
  serverTimestamp,
  doc,
  updateDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";
import MessageHeader from "./MessageHeader";
import MessageContent from "./MessageContent";
import MessageInput from "./MessageInput";
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext từ Firebase

const MessageDetail = ({ conversation }) => {
  const { user, loading: authLoading } = useContext(AuthContext); // Lấy user từ Firebase AuthContext
  const [input, setInput] = useState("");
  const endOfMessagesRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [recipientEmail, setRecipientEmail] = useState(null);

  const [loadingConversation, setLoadingConversation] = useState(true);
  const [loadingRecipient, setLoadingRecipient] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const userEmail = user.email;
  // Nếu dữ liệu user chưa tải xong, hiển thị loading
  if (authLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50">
        <p className="text-gray-500">Loading user data...</p>
      </div>
    );
  }

  // Nếu không có người dùng đăng nhập, hiển thị thông báo
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50">
        <p className="text-gray-500">Please log in to access messages.</p>
      </div>
    );
  }

  // Lấy email từ Firebase user object

  // Lắng nghe thay đổi của conversation
  useEffect(() => {
    if (conversation) {
      setLoadingConversation(false);
    }
  }, [conversation]);

  // Lấy email người nhận từ conversation
  useEffect(() => {
    if (conversation?.users && Array.isArray(conversation.users)) {
      const recipient = conversation.users.find((email) => email !== userEmail);
      setRecipientEmail(recipient || null);
      setLoadingRecipient(false);
    } else {
      setLoadingRecipient(false);
      console.error(
        "Conversation users is not an array or is undefined:",
        conversation
      );
    }
  }, [conversation, userEmail]);

  // Lắng nghe thay đổi tin nhắn real-time
  useEffect(() => {
    if (!conversation?.id) return;

    setLoadingMessages(true);

    const messagesQuery = query(
      collection(db, "messages"),
      where("conversationId", "==", conversation.id),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      setMessages(
        snapshot.docs.map((message) => ({
          id: message.id,
          ...message.data(),
          timestamp: message.data().timestamp?.toDate().getTime() || Date.now(),
        }))
      );
      setLoadingMessages(false);
    });

    return () => unsubscribe();
  }, [conversation?.id]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input || typeof input !== "string") {
      console.error("Input is invalid:", input);
      return;
    }

    if (!conversation || !conversation.id) {
      console.error(
        "Conversation or conversation ID is missing:",
        conversation
      );
      return;
    }

    if (!userEmail) {
      console.error("User email is missing:", userEmail);
      return;
    }

    try {
      // Lưu thông tin người dùng vào Firestore
      const userRef = doc(db, "users", user.id);
      await setDoc(
        userRef,
        {
          email: userEmail,
          name: user.displayName || "",
          createdAt: new Date(),
        },
        { merge: true }
      );

      console.log("Input:", input);
      console.log("Conversation:", conversation.id);
      console.log("User:", user);
      console.log("User Email:", userEmail);
      await addDoc(collection(db, "messages"), {
        conversationId: conversation.id,
        sender: userEmail,
        text: input,
        timestamp: serverTimestamp(),
      });

      // Cập nhật thông tin cuộc trò chuyện
      const conversationRef = doc(db, "conversations", conversation.id);
      await updateDoc(conversationRef, {
        lastMessage: input,
        lastMessageTime: serverTimestamp(),
      });

      // Reset input và cuộn xuống cuối
      setInput("");
      scrollToBottom();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (loadingConversation) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50">
        <p className="text-gray-500">Loading conversation...</p>
      </div>
    );
  }

  if (!conversation || !conversation.users) {
    return (
      <div className="w-full flex flex-col items-center justify-center bg-gray-100 border-2 border-gray-300 rounded-lg shadow-md p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-6 0a3 3 0 01-6 0M15 16a3 3 0 106 0m-6 0a3 3 0 016 0m-6 0h6M3 8a9 9 0 0118 0v4a9 9 0 01-18 0V8z"
          />
        </svg>
        <p className="text-gray-600 text-lg font-medium">No messages yet</p>
        <p className="text-gray-500 text-sm mt-1">
          Select a conversation to start chatting
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-5 w-full">
      <div className="h-auto">
        {loadingRecipient ? (
          <p className="text-gray-500 text-center py-2">Loading recipient...</p>
        ) : (
          <MessageHeader recipientEmail={recipientEmail} />
        )}
      </div>

      {loadingMessages ? (
        <div className="flex flex-col flex-1 justify-center items-center">
          <p className="text-gray-500">Loading messages...</p>
        </div>
      ) : (
        <div className="w-full flex flex-col flex-1 justify-between gap-4 px-4 pb-4 overflow-y-auto">
          <MessageContent
            messages={messages}
            userEmail={userEmail}
            endOfMessagesRef={endOfMessagesRef}
          />
          <MessageInput
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />
        </div>
      )}
    </div>
  );
};

export default MessageDetail;
