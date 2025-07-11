import { View, StyleSheet } from "react-native";
import ProfileCard from "../components/profilecard";
import AboutButton from "../components/aboutbutton"; 

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <AboutButton />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eaf2fd",
  },
});
