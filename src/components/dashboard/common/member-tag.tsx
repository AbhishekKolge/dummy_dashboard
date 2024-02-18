import { Member } from '../types';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { getInitials } from '@/utils/helper';
import { LEVEL } from '@/utils/defaults';

const MemberTag: React.FC<Member> = (props) => {
  const { firstName, lastName, profileImage, level } = props;
  return (
    <div className='font-normal text-xs flex items-center gap-1'>
      <Avatar className='mr-1 w-5 h-5'>
        <AvatarImage src={profileImage} alt='profile photo' />
        <AvatarFallback>
          {getInitials(`${firstName} ${lastName}`)}
        </AvatarFallback>
      </Avatar>
      <span>{`${firstName} ${lastName}`}</span>
      <span>{LEVEL[level as keyof typeof LEVEL]}</span>
    </div>
  );
};

export default MemberTag;
