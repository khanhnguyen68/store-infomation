import { FormComponentProps } from 'antd/es/form';

export interface RedInvoice {
  name: string;
  address: string;
  district: string;
  city: string;
  taxCode: string;
}
export interface StoreFromProps extends FormComponentProps {
  id: string;
  logoUrl: string;
  name: string;
  address: string;
  district: string;
  city: string;
  phone: string;
  redInvoice: RedInvoice;
}