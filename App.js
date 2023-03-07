/*import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import HomePage from './Screens/HomePage';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomePage />
    </ApplicationProvider>
  </>
);*/

// hola mundo con tailwind
import React from 'react';
import { View, Text } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <View style={tailwind('bg-blue-500 h-full')}>
      <Text style={tailwind('text-white text-2xl font-bold')}>Hola mundo</Text>
    </View>
  );
}