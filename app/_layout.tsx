import { Slot} from 'expo-router';
import {UsuarioProvider} from '@/context/UsuarioContext';
import { globalStyles } from '@/globalStyles/globalStyles';
import { View } from 'react-native';

export default function RootLayout() {

  return (
    <View style={[
      globalStyles.fondoGris,
      globalStyles.h100
    ]}>
        <UsuarioProvider>
          <Slot/>
        </UsuarioProvider>
    </View>
  );
}
