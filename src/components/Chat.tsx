// UI
import ChatMessage from "./ChatMessage";
import EmptyMessages from "./EmptyMessages";

// TS
import { ChatMessage as ChatMessageType, ChatMessages } from "@/types/types";

type ChatProps = {
  chatMessages: ChatMessages;
  isFetching: boolean;
};

const Chat = ({ chatMessages, isFetching }: ChatProps) => {
  return (
    <div className="rounded-md space-y-4 flex-grow-1 h-full">
      <>
        {chatMessages.length > 0 ? (
          chatMessages.map((chatMessage: ChatMessageType) => (
            <ChatMessage key={chatMessage.created} {...chatMessage} />
          ))
        ) : (
          <EmptyMessages />
        )}
        {isFetching && (
          <ChatMessage
            role="assistant"
            message="Typing..."
            created={new Date().getTime()}
          />
        )}
      </>
    </div>
  );
};

export default Chat;
