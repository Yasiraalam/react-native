import {
  ScrollView,
  useColorScheme,
  SafeAreaView,
  Text
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCards />
      <ContactList/>
      <ActionCards /> 
      </ScrollView>
    </SafeAreaView>

  );
}

export default App;
