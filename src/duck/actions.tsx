import { StoreFromProps, LOAD_DATA_SUCCESS, StoreActionType } from './types'

export function loadDataSuccess(newData: StoreFromProps): StoreActionType {
  return {
    type: LOAD_DATA_SUCCESS,
    payload: newData
  }
}