import React from 'react';
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
);
