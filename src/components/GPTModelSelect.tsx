import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { models, useGPTModel, Model } from "@/contexts/GPTModelContext";

const GPTModelSelect = () => {
  const { model, changeModel } = useGPTModel();

  return (
    <Select
      defaultValue={model}
      onValueChange={(selectedModel: Model) => changeModel(selectedModel)}
    >
      <SelectTrigger className="w-32 text-xs py-1">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {models.map((model) => (
          <SelectItem key={model} value={model} className="text-xs">
            {model}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default GPTModelSelect;
