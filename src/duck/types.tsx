
export const LOAD_DATA = 'LOAD_DATA'
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS'
export interface RedInvoice {
  name: string;
  address: string;
  district: string;
  city: string;
  taxCode: string;
}
export interface StoreFromProps {
  id: string;
  logoUrl: string;
  name: string;
  address: string;
  district: string;
  city: string;
  phone: string;
  redInvoice: RedInvoice;
}

interface loadDataSuccess {
  type: typeof LOAD_DATA_SUCCESS,
  payload: StoreFromProps,
}

export type StoreActionType = loadDataSuccess