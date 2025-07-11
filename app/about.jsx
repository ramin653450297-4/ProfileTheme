import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "./context/ThemeContext"; // Adjust the import path as necessary

const About = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: theme.color.backgroundSecondary || theme.color.surface || '#f9f9f9',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Text
        style={{
          color: theme.color.text,
          fontWeight: 'bold',
          fontSize: 22,
          marginBottom: 10,
          textAlign: 'center',
        }}
      >
        Hybrid Mobile Application Programming
      </Text>
      <View
        style={{
          height: 1,
          backgroundColor: theme.color.border || theme.color.textSecondary || '#ccc',
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          color: theme.color.text,
          fontSize: 16,
          lineHeight: 24,
          textAlign: 'justify',
          letterSpacing: 0.3,
        }}
      >
        <Text style={{ fontWeight: 'bold', color: theme.color.text }}>Hardware architecture</Text>, characteristics and limitations of mobile devices,{' '}
        tools and languages for <Text style={{ fontWeight: 'bold', color: theme.color.text }}>cross platform development</Text>,{' '}
        memory and data storage, user and hardware access permissions,{' '}
        <Text style={{ fontWeight: 'bold', color: theme.color.text }}>UI/UX design</Text>, communication with external systems,{' '}
        testing and <Text style={{ fontWeight: 'bold', color: theme.color.text }}>security issues</Text>,{' '}
        and hands-on practice.
      </Text>
    </View>
  );
};
export default About;


