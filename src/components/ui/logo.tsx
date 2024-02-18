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
        'w-full h-16 rounded-none bg-grey-100',
        isCollapsed && 'w-16'
      )}
    >
      <AvatarImage className='rounded-none' alt='logo' />
      <AvatarFallback className='rounded-none bg-grey-100' />
    </Avatar>
  );
};

export default Logo;
