import { StyleSheet, View } from "react-native";
import Biblioteca from "./src/components/Biblioteca";
import Header from "./src/components/Header";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Biblioteca />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
