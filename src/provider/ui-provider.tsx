import { TooltipProvider } from '@/components/ui/tooltip';

import { TOOLTIP_DELAY_DURATION } from '@/utils/defaults';

interface UiProviderProps {
  children: React.ReactNode;
}

const UiProvider: React.FC<UiProviderProps> = (props) => {
  const { children } = props;

  return (
    <TooltipProvider delayDuration={TOOLTIP_DELAY_DURATION}>
      {children}
    </TooltipProvider>
  );
};

export default UiProvider;
