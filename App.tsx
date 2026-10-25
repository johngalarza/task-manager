import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.heading}>Task Manager</Text>
      </View>
      <View style={styles.container}>
        <Text>Hola</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    paddingTop: 28,
    paddingBottom: 24,
  },

  heading: {
    color: 'blue',
    fontSize: 34,
    fontWeight: '800',
  },
});
