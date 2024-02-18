import { wait } from '@/utils/helper';

import { RENTAL_TOOLS_DATA } from '@/components/dashboard/data';

export const getRentalTools = async () => {
  await wait(0);
  return RENTAL_TOOLS_DATA;
};
