import { ThemeProvider } from '@emotion/react';
import { type CSSProperties, type FC } from "react";

import { Button } from "./Button";
import { DynamicElement } from "./DynamicElement";
import { theme } from './styles';

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <DynamicElement element="section" aria-label="A tab group"
      style={{
        '--palette-primary-main': 'green',
      } as CSSProperties}
    >
      <Button disabled>Disabled</Button>
      <Button>Not disabled</Button>
      {/* <TabGroup /> */}
    </DynamicElement>
  </ThemeProvider >
);