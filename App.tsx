import { NativeBaseProvider, StatusBar } from 'native-base';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Home } from './src/screens/Home';
import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';

export default function App() {
  const [loadedFonts] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {loadedFonts ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}
