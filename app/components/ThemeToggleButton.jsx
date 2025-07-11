import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path as necessary

const ThemeToggleButton = () => {
  const { toggleTheme, isDarkMode, color } = useTheme();

  return (
    <TouchableOpacity
  onPress={toggleTheme}

>
      <Text style={{ color: color.text }}>
        {isDarkMode ? "☀️ " : "🌙 "}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeToggleButton;


