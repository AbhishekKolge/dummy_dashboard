import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { cn } from '@/lib/utils';

interface LogoProps {
  isCollapsed: boolean;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { isCollapsed } = props;

  return (
    <Avatar
      className={cn(
        'rounded-none w-20 h-20',
        isCollapsed && 'w-full h-auto aspect-square'
      )}
    >
      <AvatarImage className='rounded-none' alt='logo' />
      <AvatarFallback className='rounded-none' />
    </Avatar>
  );
};

export default Logo;
