import ThemeProvider from './theme-provider';
import UiProvider from './ui-provider';

import { THEME, THEME_ATTRIBUTE } from '@/utils/defaults';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider
      attribute={THEME_ATTRIBUTE}
      defaultTheme={THEME}
      enableSystem
      disableTransitionOnChange
    >
      <UiProvider>{children}</UiProvider>
    </ThemeProvider>
  );
};

export default Provider;
