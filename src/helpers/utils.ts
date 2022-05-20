import { formatUnits } from 'ethers/lib/utils';

export const getAllValuesEnum = (enumVar: any): any[] => {
  const keysAndValues = Object.values(enumVar);
  const values: any = [];

  keysAndValues.forEach((keyOrValue: any) => {
    if (isNaN(Number(keyOrValue))) {
      values.push(enumVar[keyOrValue] || keyOrValue);
    }
  });

  return values;
};

export const shortAddress = (address: string) => {
  return address.substring(0, 6) + '...' + address.substring(36);
};

export const formatPrice = (wei: string, unit = 18) => {
  const price = formatUnits(wei, unit);
  return Number(price.substring(0, price.indexOf('.') + 5));
};
