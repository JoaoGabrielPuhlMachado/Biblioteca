import { StyleSheet, View } from 'react-native';
import Biblioteca from './src/components/Biblioteca';
export default function App() {
  return (
    <View style={styles.container}>
      <Biblioteca />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
