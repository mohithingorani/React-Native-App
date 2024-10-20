import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello This is Home</Text>
      <Link style={styles.link} href="/details/1">
        Go To Details for 1
      </Link>
      <Link style={styles.link} href="/details/2">
        Go To Details for 2
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "blue",
    fontSize: 20,
    textDecorationLine: "underline",
    textDecorationColor: "blue",
  },
});
