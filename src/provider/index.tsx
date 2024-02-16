import ThemeProvider from './theme-provider';
import UiProvider from './ui-provider';

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <UiProvider>{children}</UiProvider>
    </ThemeProvider>
  );
};

export default Provider;
