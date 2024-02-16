import ThemeProvider from './theme-provider';
import UiProvider from './ui-provider';

import { THEME } from '@/utils/defaults';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme={THEME}
      enableSystem
      disableTransitionOnChange
    >
      <UiProvider>{children}</UiProvider>
    </ThemeProvider>
  );
};

export default Provider;
