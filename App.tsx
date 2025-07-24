import {
  ScrollView,
  useColorScheme,
  SafeAreaView,
  Text
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ backgroundColor: 'gray' }}>
      <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCards /> 
      </ScrollView>
    </SafeAreaView>

  );
}

export default App;
