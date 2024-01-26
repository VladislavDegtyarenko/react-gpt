import { useEffect, useState } from "react";
import OpenAI from "openai";

console.log("import.meta.env.VITE_OPENAI_API_KEY: ", import.meta.env.VITE_OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// UI
import Chat from "./Chat";
import Container from "./Container";
import Form from "./Form";

// TS

import { ChatMessages, ChatCompletionObject, Role } from "@/types/types";
import { useGPTModel } from "@/contexts/GPTModelContext";

const MESSAGES_STORAGE_KEY = "reactgpt.messages";

const Main = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessages>(() => {
    try {
      const storageMessages = localStorage.getItem(MESSAGES_STORAGE_KEY);
      if (storageMessages) return JSON.parse(storageMessages) as ChatMessages;
    } catch (error) {
      console.warn("Unable to read messages to localStorage");
    }

    return [] as ChatMessages;
  });
  const [isFetching, setIsFetching] = useState(false);
  const { model } = useGPTModel();

  useEffect(() => {
    try {
      localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(chatMessages));
    } catch (error) {
      console.warn("Unable to write messages to localStorage");
    }
  }, [chatMessages]);

  const sendMessage = async (message: string) => {
    setIsFetching(true);
    addMessage("user", message, new Date().getTime());

    const completion = (await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model,
    })) as ChatCompletionObject;

    const responseMessage = completion.choices[0].message;
    setIsFetching(false);

    setChatMessages((prevChatMessages) => {
      // Assistant message
      if (
        responseMessage.role === "assistant" ||
        responseMessage.role === "system" ||
        responseMessage.role === "tool"
      ) {
        const newMessage = {
          role: responseMessage.role,
          message: responseMessage.content || "",
          created: completion.created,
        };

        return [...prevChatMessages, newMessage];
      }

      // Fallback
      return prevChatMessages;
    });
  };

  const addMessage = (role: Role, message: string, created: number) => {
    setChatMessages((prevChatMessages) => [
      ...prevChatMessages,
      {
        role,
        message,
        created,
      },
    ]);
  };

  return (
    <div className="pt-4 h-full">
      <Container className="h-full">
        <div className="space-y-4 flex flex-col h-full">
          <Chat chatMessages={chatMessages} isFetching={isFetching} />
          <Form sendMessage={sendMessage} />
        </div>
      </Container>
    </div>
  );
};

export default Main;
