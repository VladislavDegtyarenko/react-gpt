// Core
import { useState } from "react";

// UI
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { SendHorizontal } from "lucide-react";

type FormProps = {
  sendMessage: (message: string) => void;
};

const Form = ({ sendMessage }: FormProps) => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.ctrlKey && event.key === "Enter") {
      console.log("Ctrl+Enter was pressed!");
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex space-x-4 sticky bottom-0 bg-background py-1">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message ReactGPT..."
        className="resize-none"
      />
      <Button
        disabled={message.trim().length === 0}
        size="icon"
        className="shrink-0"
        onClick={() => {
          sendMessage(message);
          setMessage("");
        }}
      >
        <SendHorizontal size={16} />
      </Button>
    </div>
  );
};

export default Form;
