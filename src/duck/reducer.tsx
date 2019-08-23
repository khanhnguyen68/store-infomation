import { StoreFromProps, LOAD_DATA_SUCCESS, StoreActionType } from './types'

const initialState: StoreFromProps = {
  id: '',
  logoUrl: '',
  name: '',
  address: '',
  city: '',
  district: '',
  phone: '',
  redInvoice: {
    name: '',
    address: '',
    city: '',
    district: '',
    taxCode: '',
  }
};

function reducer(state: StoreFromProps, action: StoreActionType) {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return {...state, ...action.payload};
    default:
      return state
  }
}

const config = [reducer, initialState]
export default config