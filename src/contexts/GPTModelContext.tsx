import { ReactNode, createContext, useContext, useState } from "react";

export const models = [
  "gpt-3.5-turbo",
  // "gpt-3.5-turbo-0613",
  // "gpt-3.5-turbo-16k-0613",
  "gpt-4",
] as const;

export type Model = (typeof models)[number];
type GPTModelContextProps = {
  model: Model;
  changeModel: (selectedModel: Model) => void;
};

const DEFAULT_MODEL = models[0];
const MODEL_STORAGE_KEY = "reactgpt.model";

const initialContext = {
  model: DEFAULT_MODEL,
  changeModel: () => {},
};

const GPTModelContext = createContext<GPTModelContextProps>(initialContext);

export const GPTModelContextProvider = ({ children }: { children: ReactNode }) => {
  const [model, setModel] = useState<Model>(
    () => (localStorage.getItem(MODEL_STORAGE_KEY) as Model) || DEFAULT_MODEL
  );

  const value = {
    model,
    changeModel: (selectedModel: Model) => {
      localStorage.setItem(MODEL_STORAGE_KEY, model);
      setModel(selectedModel);
    },
  };

  return <GPTModelContext.Provider value={value}>{children}</GPTModelContext.Provider>;
};

export const useGPTModel = () => {
  const context = useContext(GPTModelContext);

  if (context === undefined)
    throw new Error("useGPTModel must be used within a ThemeProvider");

  return context;
};
