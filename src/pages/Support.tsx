import { AppSidebar } from "@/components/AppSidebar";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { useState } from "react";

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const Support = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setMessages((prev) => [...prev, userMessage]);

    // Simulate support response after 1 second
    setTimeout(() => {
      const supportMessage: Message = {
        id: messages.length + 2,
        content: "Thank you for your message. A support representative will get back to you soon.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, supportMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
          <SidebarInset className="flex flex-col">
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="max-w-2xl mx-auto space-y-4">
                <h1 className="text-2xl font-bold mb-6">Support Chat</h1>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      message={message.content}
                      isUser={message.isUser}
                      timestamp={message.timestamp}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="max-w-2xl mx-auto w-full">
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Support;