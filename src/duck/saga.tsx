import { put, takeLatest, all } from "redux-saga/effects";
import {loadDataSuccess} from './actions'
import { LOAD_DATA } from './types'

function* loadData() {
  const newData = {
    id: '123123',
    name: 'demo name',
    address: '123 Hoang Hoa Tham',
    district: 'tan-binh',
    city: 'ho-chi-minh',
    phone: '0901234567',
    logoUrl: '',
    redInvoice: {
      name: 'red invoice 1',
      address: '123 Hoang Hoa Tham',
      district: 'tan-binh',
      city: 'ho-chi-minh',
      taxCode: '901384933',
    }
  }
  yield put(loadDataSuccess(newData))
}

function* rootSaga() {
  yield all([
    takeLatest(LOAD_DATA, loadData),
  ])

}
export default rootSaga