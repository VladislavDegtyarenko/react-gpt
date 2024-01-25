import { ChatMessage as ChatMessageType } from "@/types/types";
import { User, Bot } from "lucide-react";
import { Fragment } from "react";

interface ChatMessageProps extends ChatMessageType {}

const ChatMessage = ({ role, message }: ChatMessageProps) => {
  const messageByLineBreaks = message.split("\n");

  return (
    <div
      className={`flex items-start space-x-2 p-2 ${
        role === "user" ? "bg-accent rounded-md" : ""
      }`}
    >
      <div className="flex shrink-0 justify-center items-center">
        {role === "user" && <User size={24} />}
        {role === "assistant" && <Bot size={24} />}
      </div>
      <div>
        <div className="text-sm font-bold">{role === "user" ? "You" : "ChatGPT"}</div>
        <div className="text-sm">
          {messageByLineBreaks.filter(Boolean).map((paragraph, index) => (
            <Fragment key={paragraph + index}>
              <p>{paragraph}</p>
              {index < messageByLineBreaks.length - 1 && <br />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
