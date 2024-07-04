import { IProduct } from '../lib/types/products';

export function getTimeStamp(date: string) {
    const creationProductDate = new Date(date);
    return creationProductDate.getTime();
}


