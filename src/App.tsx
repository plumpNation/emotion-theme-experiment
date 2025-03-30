import { ThemeProvider } from '@emotion/react';
import { type FC } from 'react';

import { Button } from './components/Button';
import { DynamicElement } from './components/DynamicElement';

import { theme } from './theme';

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <DynamicElement element="section" aria-label="A tab group">
      <Button color="primary" disabled>Disabled</Button>
      <Button color="primary">Not disabled</Button>
      {/* <TabGroup /> */}
    </DynamicElement>
  </ThemeProvider >
);