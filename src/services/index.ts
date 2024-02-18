import { wait } from '@/utils/helper';

import {
  RENTAL_TOOLS_DATA,
  MISSING_ITEMS_DATA,
  RESTOCK_ITEMS_DATA,
  TOOLS_EQUIPMENT_AVAILABILITY_DATA,
} from '@/components/dashboard/data';

export const getRentalTools = async () => {
  await wait(3000);
  return RENTAL_TOOLS_DATA;
};

export const getMissingItems = async () => {
  await wait(1000);
  return MISSING_ITEMS_DATA;
};

export const getRestockItems = async () => {
  await wait(2000);
  return RESTOCK_ITEMS_DATA;
};

export const getToolsEquipmentsAvailability = async () => {
  await wait(3500);
  return TOOLS_EQUIPMENT_AVAILABILITY_DATA;
};
