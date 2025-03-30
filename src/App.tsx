import { ThemeProvider } from '@emotion/react';
import { type FC } from 'react';

import { Button } from './components/Button';
import { DynamicElement } from './components/DynamicElement';
import { TabGroup } from './components/TabGroup';
import { Typography } from './components/Typography';
import { theme } from './theme';

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <DynamicElement element="section" aria-label="Button usage">
      <Button color="primary" disabled title="This is why it's disabled">Disabled</Button>
      <Button color="primary">Not disabled</Button>
      <Button color="primary" htmlDisabled>True disabled</Button>
    </DynamicElement>

    <DynamicElement element="section" aria-label="Tab group usage">
      <TabGroup />
    </DynamicElement>

    <DynamicElement element="section" aria-label="Typography usage">
      <Typography>Boom</Typography>
    </DynamicElement>
  </ThemeProvider >
);