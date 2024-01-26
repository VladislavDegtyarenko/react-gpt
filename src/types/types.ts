import OpenAI from "openai";

export type Role = OpenAI.Chat.Completions.ChatCompletionRole;

export type ChatMessage = {
  role: Role;
  message: string;
  created: number;
};

export type ChatMessages = ChatMessage[];
