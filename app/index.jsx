import { ThemeProvider } from "./context/ThemeContext"; // Adjust the import path as necessary
import ProfileScreen from "./screens/profilescreen"; // Adjust the import path as necessary


const Home = () => {
  return (
    <ThemeProvider>
      <ProfileScreen />
    </ThemeProvider>
  );
};

export default Home;
