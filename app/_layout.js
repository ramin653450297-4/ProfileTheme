import { Stack } from "expo-router";
import ThemeToggleButton from "./components/ThemeToggleButton"; 
import { ThemeProvider, useTheme } from "./context/ThemeContext"; 

function StackLayout() {
  const { color } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: color.background,
        },
        headerTintColor: color.text,
        headerTitleStyle: {
          color: color.text,
        },
        contentStyle: {
          backgroundColor: color.background,
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerBackTitleVisible: false,
        headerBackTitleStyle: {
          color: color.textSecondary,
        },
        headerBackButtonMenuEnabled: true,
        headerBackButtonMenuVisible: true,
        headerBackButtonMenuIconStyle: {
          tintColor: color.textSecondary,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Profile", headerRight: () => <ThemeToggleButton /> }}
      />
      <Stack.Screen
        name="about"
        options={{ title: "Course Information", headerRight: () => <ThemeToggleButton /> }}
      />
    </Stack>
  );
}
export default function Layout() {
  return (
    <ThemeProvider>
      <StackLayout />
    </ThemeProvider>
  );
}
