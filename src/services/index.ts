import { wait } from '@/utils/helper';

import {
  RENTAL_TOOLS_DATA,
  MISSING_ITEMS_DATA,
  RESTOCK_ITEMS_DATA,
  TOOLS_EQUIPMENT_AVAILABILITY_DATA,
  RECEPTION_SUMMARY_DATA,
  WORK_ORDER_STATUS_DATA,
} from '@/components/dashboard/data';

export const getRentalTools = async () => {
  await wait(2500);
  return RENTAL_TOOLS_DATA;
};

export const getMissingItems = async () => {
  await wait(1000);
  return MISSING_ITEMS_DATA;
};

export const getRestockItems = async () => {
  await wait(3500);
  return RESTOCK_ITEMS_DATA;
};

export const getToolsEquipmentsAvailability = async () => {
  await wait(2700);
  return TOOLS_EQUIPMENT_AVAILABILITY_DATA;
};

export const getReceptionSummary = async () => {
  await wait(2000);
  return RECEPTION_SUMMARY_DATA;
};

export const getWorkOrderStatus = async () => {
  await wait(3000);
  return WORK_ORDER_STATUS_DATA;
};
