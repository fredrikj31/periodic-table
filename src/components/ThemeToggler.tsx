import { useTheme } from "../providers/theme";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        break;
    }
  };

  return <button onClick={() => toggleTheme()}>{theme}</button>;
};
