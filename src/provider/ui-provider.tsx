import { TooltipProvider } from '@/components/ui/tooltip';

interface UiProviderProps {
  children: React.ReactNode;
}

const UiProvider: React.FC<UiProviderProps> = (props) => {
  const { children } = props;

  return <TooltipProvider>{children}</TooltipProvider>;
};

export default UiProvider;
