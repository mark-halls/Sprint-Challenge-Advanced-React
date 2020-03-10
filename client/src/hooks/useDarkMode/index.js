import { useLocalStorage } from "../useLocalStorage";

const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

  const setMode = value => {
    setDarkMode(value);
  };

  return [darkMode, setMode];
};

export { useDarkMode };
