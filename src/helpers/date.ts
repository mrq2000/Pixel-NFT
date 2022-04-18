import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import 'dayjs/locale/en';

export const formatDate = (dateTime: any): string => dayjs(dateTime).format('YYYY-MM-DD');
export const formatDateTime = (dateTime: any) => dayjs(dateTime).format('HH:mm DD/MM/YYYY');
