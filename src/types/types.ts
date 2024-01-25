type SystemMessage = {
  content: string;
  role: "system";
  name?: string;
};
type UserMessage = {
  role: "user";
  content: string | [string, string[]];
  name?: string;
};
type AssistantMessage = {
  role: "assistant";
  content?: string | null;
  name?: string;
  tool_calls?: {
    id: string;
    type: string;
    // function: (name: string, arguments: string) => void;
  }[];
};
type ToolMessage = {
  role: "tool";
  content: string;
  tool_call_id: string;
};
type FunctionMessage = {
  role: "function";
  content: string | null;
  name: string;
};

export type Role = "user" | "assistant" | "system" | "tool" | "function";

export type ChatCompletionObject = {
  id: string;
  object: "chat.completion";
  created: number; // timestamp
  model: string;
  system_fingerprint: string;
  choices: {
    index: number;
    message:
      | SystemMessage
      | UserMessage
      | AssistantMessage
      | ToolMessage
      | FunctionMessage;
    logprobs: boolean | null;
    finish_reason: "stop" | "length" | "content_filter" | "tool_calls" | "function_call";
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export type ChatMessage = {
  role: "assistant" | "user" | "tool" | "system" | "function";
  message: string;
  created: number;
};

export type ChatMessages = ChatMessage[];
