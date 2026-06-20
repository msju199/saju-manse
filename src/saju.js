import { calculateSaju } from '@fullstackfamily/manseryeok';

export function getSajuPillars(year, month, day, hour, minute) {
  return calculateSaju(year, month, day, hour, minute);
}
