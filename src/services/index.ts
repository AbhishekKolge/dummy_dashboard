import { wait } from '@/utils/helper';

import { RENTAL_TOOLS_DATA } from '@/components/dashboard/data';

export const getRentalTools = async () => {
  await wait(3000);
  return RENTAL_TOOLS_DATA;
};
