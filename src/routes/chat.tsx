import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/chat")({
  component: ChatComponent,
});

interface Message {
  id: number;
  username: string;
  text: string;
  timestamp: Date;
}

function ChatComponent() {
  const [nickname, setNickname] = useState<string>("");
  const [isNicknameSet, setIsNicknameSet] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      username: "System",
      text: "Welcome to the chat! Please be respectful and enjoy the conversation.",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleNicknameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim().length >= 2) {
      setIsNicknameSet(true);
      // Add welcome message
      const welcomeMessage: Message = {
        id: Date.now(),
        username: "System",
        text: `${nickname} joined the chat!`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, welcomeMessage]);
    }
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now(),
        username: nickname,
        text: newMessage.trim(),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
      handleMessageSubmit(fakeEvent);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  const handleLeaveChat = () => {
    const leaveMessage: Message = {
      id: Date.now(),
      username: "System",
      text: `${nickname} left the chat.`,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, leaveMessage]);
    setIsNicknameSet(false);
    setNickname("");
    setNewMessage("");
  };

  // Nickname Entry Screen
  if (!isNicknameSet) {
    return (
      <div className="min-h-screen sm:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-3 sm:px-4">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-8 w-full max-w-sm sm:max-w-md mx-auto">
          <div className="text-center mb-5 sm:mb-8">
            <div className="inline-block p-3 sm:p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-3 sm:mb-6">
              <svg
                className="w-7 h-7 sm:w-10 sm:h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">
              Join the Chat
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Enter your nickname to start chatting with others
            </p>
          </div>

          <form
            onSubmit={handleNicknameSubmit}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nickname
              </label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Enter your nickname..."
                className="w-full px-3 py-3 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base transition-colors"
                minLength={2}
                maxLength={20}
                required
                autoFocus
              />
              <p className="mt-1.5 text-xs text-gray-500">
                Must be between 2-20 characters
              </p>
            </div>

            <button
              type="submit"
              disabled={nickname.trim().length < 2}
              className="w-full bg-blue-600 text-white py-3.5 px-4 rounded-lg font-semibold text-base hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Join Chat
            </button>
          </form>

          <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
                <span>Online</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></div>
                <span>Demo Chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Chat Screen
  return (
    <div className="h-screen sm:h-auto sm:max-w-4xl sm:mx-auto sm:px-6 lg:px-8 sm:py-8">
      <div className="bg-white sm:rounded-lg sm:shadow-xl overflow-hidden flex flex-col h-full sm:h-[80vh]">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-3 sm:px-6 py-3 sm:py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-xl font-semibold text-white truncate">
                Chat Room
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 truncate">
                Logged in as: <span className="font-medium">{nickname}</span>
              </p>
            </div>
            <button
              onClick={handleLeaveChat}
              className="bg-white/20 hover:bg-white/30 text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-colors ml-2 flex-shrink-0"
            >
              <span className="hidden sm:inline">Leave Chat</span>
              <span className="sm:hidden">Leave</span>
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-2.5 sm:space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div key={message.id} className="flex space-x-2 sm:space-x-3">
              <div
                className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold flex-shrink-0 ${
                  message.username === "System"
                    ? "bg-gray-500"
                    : message.username === nickname
                    ? "bg-blue-600"
                    : "bg-green-600"
                }`}
              >
                {message.username === "System"
                  ? "🤖"
                  : message.username.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline space-x-1.5 mb-1">
                  <span
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      message.username === "System"
                        ? "text-gray-600"
                        : message.username === nickname
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {message.username}
                  </span>
                  <span className="text-xs text-gray-500 flex-shrink-0">
                    <span className="hidden sm:inline">
                      {formatDate(message.timestamp)} at{" "}
                    </span>
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                <div
                  className={`inline-block px-2.5 sm:px-4 py-2 rounded-lg text-sm sm:text-base break-words max-w-full ${
                    message.username === "System"
                      ? "bg-gray-100 text-gray-800"
                      : message.username === nickname
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 bg-white p-3 sm:p-6 flex-shrink-0">
          <form
            onSubmit={handleMessageSubmit}
            className="flex space-x-2 sm:space-x-4"
          >
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base transition-colors"
              maxLength={500}
              autoFocus
            />
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="bg-blue-600 text-white px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex-shrink-0"
            >
              <span className="hidden sm:inline">Send</span>
              <span className="sm:hidden">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </span>
            </button>
          </form>
          <p className="mt-2 text-xs text-gray-500">
            <span className="hidden sm:inline">Press Enter to send • </span>Max
            500 characters
          </p>
        </div>
      </div>
    </div>
  );
}
