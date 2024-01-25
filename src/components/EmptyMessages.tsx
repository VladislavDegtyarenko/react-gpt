import { Bot } from "lucide-react";

const EmptyMessages = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full flex-grow-1 space-y-2">
      <Bot size={40} />
      <div className="font-bold">How can I help you today?</div>
    </div>
  );
};

export default EmptyMessages;
