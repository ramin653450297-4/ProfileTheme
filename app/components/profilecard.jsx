import { View, Text, StyleSheet, Image } from "react-native";

const ProfileCard = () => {
  return (
    <View>
      {/* Profile Card */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/image/profile.jpg")}
          style={styles.image}
        />
        <Text style={styles.name}>Ramin Kaiyabut</Text>
        <Text style={styles.specialty}> Programmer | Tester | UX/UI </Text>
        <View style={styles.stats}>
          <Text>⭐ 3.6 </Text>
          <Text>👥 58+</Text>
          <Text>📅 4 yrs</Text>
        </View>
      </View>

      {/* Portfolio Section */}
      <Text style={styles.portfolioTitle}>Portfolio</Text>
      <View style={styles.portfolioGrid}>
        {/* Left column (1/2) */}
        <View style={styles.col12}>
          <View style={styles.portfolioCardLarge}>
            <Image source={require("../../assets/image/image1.png")} style={styles.portfolioImageLarge} />
            <Text style={styles.portfolioLabel}>Infographic Information</Text>
          </View>
        </View>
        {/* Right column (3/4) */}
        <View style={styles.col34}>
          <View style={styles.portfolioCardSmall}>
            <Image source={require("../../assets/image/image2.png")} style={styles.portfolioImageSmall} />
            <Text style={styles.portfolioLabel}>Web App</Text>
          </View>
          <View style={styles.portfolioCardSmall}>
            <Image source={require("../../assets/image/image3.png")} style={styles.portfolioImageSmall} />
            <Text style={styles.portfolioLabel}>UI/UX Design</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 8,
  },
  specialty: {
    fontSize: 14,
    color: "#504dff",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  portfolioTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 4,
    color: '#222',
  },
  portfolioGrid: {
    flexDirection: 'row',
    width: '100%',
    minHeight: 200,
    marginBottom: 20,
  },
  col12: {
    flex: 1,
    marginRight: 8,
    justifyContent: 'flex-start',
  },
  col34: {
    flex: 2,
    justifyContent: 'space-between',
  },
  portfolioCardLarge: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 8,
    alignItems: 'center',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 3,
    elevation: 1,
  },
  portfolioImageLarge: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  portfolioCardSmall: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 8,
    alignItems: 'center',
    padding: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  portfolioImageSmall: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  portfolioLabel: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 4,
    color: '#444',
    textAlign: 'center',
  },
});
