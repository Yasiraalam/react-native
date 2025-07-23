import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import FlatCards from './components/FlatCards';
import { SafeAreaView } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <View
        style={[{ backgroundColor: isDarkMode ? '#000' : '#fff' }]}
      >
        <FlatCards />
      </View>
    </SafeAreaView>

  );
}

export default App;
