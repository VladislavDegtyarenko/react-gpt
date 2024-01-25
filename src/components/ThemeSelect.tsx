import { Sun, Moon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { capitalize } from "@/utils/capitalize";
import { useTheme } from "@/contexts/ThemeContext";

import { themes } from "@/contexts/ThemeContext";
import { Theme } from "@/contexts/ThemeContext";

const themeIcons = {
  light: <Sun />,
  dark: <Moon />,
  system: window.matchMedia("(prefers-color-scheme: dark)").matches ? <Moon /> : <Sun />,
};

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Select defaultValue={theme} onValueChange={(theme: Theme) => setTheme(theme)}>
      <SelectTrigger className="w-20 text-xs py-1 border-none hover:bg-slate-100 dark:hover:bg-slate-800">
        {/* <SelectValue placeholder="Theme" /> */}
        {themeIcons[theme]}
      </SelectTrigger>
      <SelectContent>
        {themes.map((theme) => (
          <SelectItem key={theme} value={theme} className="text-xs">
            {capitalize(theme)}
            {/* {themeIcons[theme]} */}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSelect;
